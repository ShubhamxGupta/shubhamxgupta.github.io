/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");

/**
 * @typedef {Object} QuestionCount
 * @property {string} difficulty
 * @property {number} count
 */

/**
 * @typedef {Object} SubmissionStat
 * @property {string} difficulty
 * @property {number} [count]
 * @property {number} [submissions]
 */

/**
 * @typedef {Object} MatchedUser
 * @property {string} [username]
 * @property {{ ranking?: number, reputation?: number, starRating?: number }} [profile]
 * @property {{ acSubmissionNum?: SubmissionStat[], totalSubmissionNum?: SubmissionStat[] }} [submitStats]
 * @property {Array<{ id: string, displayName: string, icon: string }>} [badges]
 * @property {{ streak?: number, totalActiveDays?: number }} [userCalendar]
 */

/**
 * @typedef {Object} UserContestRanking
 * @property {number} [attendedContestsCount]
 * @property {number} [rating]
 * @property {number} [globalRanking]
 * @property {number} [totalParticipants]
 * @property {number} [topPercentage]
 * @property {{ name?: string }} [badge]
 */

/**
 * @typedef {Object} GraphQLData
 * @property {QuestionCount[]} [allQuestionsCount]
 * @property {MatchedUser} [matchedUser]
 * @property {UserContestRanking} [userContestRanking]
 */

async function fetchLeetCodeData(username = "ShubhamxGupta") {
    const query = `
    query getUserFullProfile($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        username
        profile {
          ranking
          reputation
          starRating
        }
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
          totalSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        badges {
          id
          displayName
          icon
        }
        userCalendar {
          streak
          totalActiveDays
        }
      }
      userContestRanking(username: $username) {
        attendedContestsCount
        rating
        globalRanking
        totalParticipants
        topPercentage
        badge {
          name
        }
      }
    }
  `;

    try {
        const response = await fetch("https://leetcode.com/graphql", {
            method: "POST", headers: {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                Referer: `https://leetcode.com/u/${username}/`,
            }, body: JSON.stringify({query, variables: {username}}),
        });

        const result = await response.json();
        /** @type {GraphQLData | undefined} */
        const data = result?.data;
        if (!data?.matchedUser) {
            console.error("Failed to fetch matchedUser data from LeetCode API.");
            return;
        }

        const allQuestionsCount = data.allQuestionsCount || [];
        const matchedUser = data.matchedUser;
        const userContestRanking = data.userContestRanking;

        const acStats = matchedUser.submitStats?.acSubmissionNum || [];
        const totalStats = matchedUser.submitStats?.totalSubmissionNum || [];

        const totalQuestionsAll = allQuestionsCount.find((q) => q.difficulty === "All")?.count || 4000;
        const totalQuestionsEasy = allQuestionsCount.find((q) => q.difficulty === "Easy")?.count || 950;
        const totalQuestionsMedium = allQuestionsCount.find((q) => q.difficulty === "Medium")?.count || 2100;
        const totalQuestionsHard = allQuestionsCount.find((q) => q.difficulty === "Hard")?.count || 950;

        const solvedAll = acStats.find((q) => q.difficulty === "All")?.count || 0;
        const solvedEasy = acStats.find((q) => q.difficulty === "Easy")?.count || 0;
        const solvedMedium = acStats.find((q) => q.difficulty === "Medium")?.count || 0;
        const solvedHard = acStats.find((q) => q.difficulty === "Hard")?.count || 0;

        const totalSubmissions = totalStats.find((q) => q.difficulty === "All")?.submissions || 1;
        const acSubmissions = acStats.find((q) => q.difficulty === "All")?.submissions || solvedAll;
        const acceptanceRate = ((acSubmissions / totalSubmissions) * 100).toFixed(1,);

        const formattedData = {
            username,
            profileUrl: `https://leetcode.com/u/${username}/`,
            updatedAt: new Date().toISOString(),
            ranking: matchedUser.profile?.ranking || 0,
            reputation: matchedUser.profile?.reputation || 0,
            totalSolved: solvedAll,
            totalQuestions: totalQuestionsAll,
            acceptanceRate: Number.parseFloat(acceptanceRate),
            easy: {
                solved: solvedEasy, total: totalQuestionsEasy,
            },
            medium: {
                solved: solvedMedium, total: totalQuestionsMedium,
            },
            hard: {
                solved: solvedHard, total: totalQuestionsHard,
            },
            contest: {
                rating: Math.round(userContestRanking?.rating || 1934),
                globalRanking: userContestRanking?.globalRanking || 32167,
                topPercentage: userContestRanking?.topPercentage || 3.77,
                attendedContests: userContestRanking?.attendedContestsCount || 43,
                badge: userContestRanking?.badge?.name || "Knight",
            },
            calendar: {
                streak: matchedUser.userCalendar?.streak || 59,
                totalActiveDays: matchedUser.userCalendar?.totalActiveDays || 282,
            },
            topBadges: matchedUser.badges?.slice(0, 4) || [],
        };

        const outputPath = path.join(__dirname, "../src/data/leetcode.json");
        fs.mkdirSync(path.dirname(outputPath), {recursive: true});
        fs.writeFileSync(outputPath, JSON.stringify(formattedData, null, 2), "utf8",);
        console.log("LeetCode data saved successfully to:", outputPath);
    } catch (error) {
        console.error("Error fetching LeetCode data:", error);
    }
}

void fetchLeetCodeData();
