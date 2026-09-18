"use client";

import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import initialData from "@/data/leetcode.json";
import {ExternalLink, Flame, Trophy, Award, CheckCircle2} from "lucide-react";

export function LeetCodeCard() {
    const [data, setData] = useState(initialData);

    // Background live update if available
    useEffect(() => {
        let isMounted = true;

        async function updateLive() {
            try {
                const query = `
          query getUserStats($username: String!) {
            allQuestionsCount { difficulty count }
            matchedUser(username: $username) {
              profile { ranking reputation }
              submitStats: submitStatsGlobal {
                acSubmissionNum { difficulty count }
                totalSubmissionNum { difficulty submissions }
              }
              userCalendar { streak totalActiveDays }
            }
            userContestRanking(username: $username) {
              rating globalRanking topPercentage attendedContestsCount badge { name }
            }
          }
        `;
                const res = await fetch("https://leetcode.com/graphql", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        query,
                        variables: {username: "ShubhamxGupta"},
                    }),
                });
                const result = await res.json();
                if (isMounted && result.data?.matchedUser) {
                    const {allQuestionsCount, matchedUser, userContestRanking} =
                        result.data;
                    const acStats = matchedUser.submitStats.acSubmissionNum;
                    const totalStats = matchedUser.submitStats.totalSubmissionNum;

                    const totalSub =
                        totalStats.find(
                            (q: { difficulty: string; submissions: number }) =>
                                q.difficulty === "All"
                        )?.submissions || 1;
                    const acSub =
                        acStats.find(
                            (q: { difficulty: string; count: number }) =>
                                q.difficulty === "All"
                        )?.count || 0;

                    setData((prev) => ({
                        ...prev,
                        ranking: matchedUser.profile.ranking,
                        totalSolved:
                            acStats.find(
                                (q: { difficulty: string; count: number }) =>
                                    q.difficulty === "All"
                            )?.count || prev.totalSolved,
                        totalQuestions:
                            allQuestionsCount.find(
                                (q: { difficulty: string; count: number }) =>
                                    q.difficulty === "All"
                            )?.count || prev.totalQuestions,
                        acceptanceRate: Number.parseFloat(((acSub / totalSub) * 100).toFixed(1)),
                        easy: {
                            solved:
                                acStats.find(
                                    (q: { difficulty: string; count: number }) =>
                                        q.difficulty === "Easy"
                                )?.count || prev.easy.solved,
                            total:
                                allQuestionsCount.find(
                                    (q: { difficulty: string; count: number }) =>
                                        q.difficulty === "Easy"
                                )?.count || prev.easy.total,
                        },
                        medium: {
                            solved:
                                acStats.find(
                                    (q: { difficulty: string; count: number }) =>
                                        q.difficulty === "Medium"
                                )?.count || prev.medium.solved,
                            total:
                                allQuestionsCount.find(
                                    (q: { difficulty: string; count: number }) =>
                                        q.difficulty === "Medium"
                                )?.count || prev.medium.total,
                        },
                        hard: {
                            solved:
                                acStats.find(
                                    (q: { difficulty: string; count: number }) =>
                                        q.difficulty === "Hard"
                                )?.count || prev.hard.solved,
                            total:
                                allQuestionsCount.find(
                                    (q: { difficulty: string; count: number }) =>
                                        q.difficulty === "Hard"
                                )?.count || prev.hard.total,
                        },
                        contest: {
                            rating: Math.round(
                                userContestRanking?.rating || prev.contest.rating
                            ),
                            globalRanking:
                                userContestRanking?.globalRanking ||
                                prev.contest.globalRanking,
                            topPercentage:
                                userContestRanking?.topPercentage ||
                                prev.contest.topPercentage,
                            attendedContests:
                                userContestRanking?.attendedContestsCount ||
                                prev.contest.attendedContests,
                            badge: userContestRanking?.badge?.name || prev.contest.badge,
                        },
                        calendar: {
                            streak:
                                matchedUser.userCalendar?.streak || prev.calendar.streak,
                            totalActiveDays:
                                matchedUser.userCalendar?.totalActiveDays ||
                                prev.calendar.totalActiveDays,
                        },
                    }));
                }
            } catch {
                // Fallback gracefully to pre-cached data
            }
        }

        void updateLive();

        return () => {
            isMounted = false;
        };
    }, []);

    const total = data.totalQuestions || 4055;
    const easyPct = (data.easy.solved / data.easy.total) * 100;
    const medPct = (data.medium.solved / data.medium.total) * 100;
    const hardPct = (data.hard.solved / data.hard.total) * 100;

    // SVG Circular Gauge calculation
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const totalSolvedPct = Math.min((data.totalSolved / total) * 100, 100);
    const strokeDashoffset =
        circumference - (totalSolvedPct / 100) * circumference;

    return (
        <div className="w-full max-w-4xl mx-auto my-12">
            <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-6 sm:p-8">
                {/* Top LeetCode Brand Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        {/* LeetCode Official SVG Logo */}
                        <div className="w-10 h-10 rounded-xl bg-[#FFA116]/10 dark:bg-[#FFA116]/15 border border-[#FFA116]/30 flex items-center justify-center shrink-0">
                            <svg
                                viewBox="0 0 24 24"
                                className="w-6 h-6 fill-[#FFA116]"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                            </svg>
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                    LeetCode Profile
                                </h3>
                                {/* Knight Badge */}
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/30 shadow-sm">
                  <Trophy size={12} className="text-purple-500" />
                  Knight ({data.contest.rating})
                </span>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                                @{data.username} &bull; Top {data.contest.topPercentage}% Globally
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href={data.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-700 transition-all shadow-sm active:scale-[0.96]"
                        >
                            <span>View LeetCode</span>
                            <ExternalLink size={13} />
                        </a>
                    </div>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6">
                    {/* Left: Circular Progress Meter */}
                    <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-slate-50/80 dark:bg-slate-950/60 rounded-2xl border border-slate-200/60 dark:border-slate-800/60">
                        <div className="relative w-36 h-36 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                                {/* Background Ring */}
                                <circle
                                    cx="60"
                                    cy="60"
                                    r={radius}
                                    className="stroke-slate-200 dark:stroke-slate-800"
                                    strokeWidth="8"
                                    fill="transparent"
                                />
                                {/* Progress Ring */}
                                <motion.circle
                                    cx="60"
                                    cy="60"
                                    r={radius}
                                    className="stroke-[#FFA116]"
                                    strokeWidth="8"
                                    strokeDasharray={circumference}
                                    initial={{strokeDashoffset: circumference}}
                                    animate={{strokeDashoffset}}
                                    transition={{duration: 1.2, ease: "easeOut"}}
                                    strokeLinecap="round"
                                    fill="transparent"
                                />
                            </svg>

                            {/* Center Text */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {data.totalSolved}
                </span>
                                <span className="text-[11px] font-medium text-slate-400">
                  Solved / {data.totalQuestions}
                </span>
                            </div>
                        </div>

                        <div className="mt-3 text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 size={13} />
                            <span>{data.acceptanceRate}% Acceptance</span>
                        </div>
                    </div>

                    {/* Middle: Difficulty Progress Bars */}
                    <div className="md:col-span-8 space-y-4">
                        {/* Easy Bar */}
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850">
                            <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                                <span className="text-teal-600 dark:text-teal-400">Easy</span>
                                <span className="text-slate-700 dark:text-slate-300 font-mono">
                  {data.easy.solved}{" "}
                                    <span className="text-slate-400 font-normal">/ {data.easy.total}</span>
                </span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                                <motion.div
                                    initial={{width: 0}}
                                    animate={{width: `${easyPct}%`}}
                                    transition={{duration: 1, delay: 0.2}}
                                    className="h-full bg-teal-500 rounded-full"
                                />
                            </div>
                        </div>

                        {/* Medium Bar */}
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850">
                            <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                                <span className="text-amber-500">Medium</span>
                                <span className="text-slate-700 dark:text-slate-300 font-mono">
                  {data.medium.solved}{" "}
                                    <span className="text-slate-400 font-normal">/ {data.medium.total}</span>
                </span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                                <motion.div
                                    initial={{width: 0}}
                                    animate={{width: `${medPct}%`}}
                                    transition={{duration: 1, delay: 0.3}}
                                    className="h-full bg-amber-500 rounded-full"
                                />
                            </div>
                        </div>

                        {/* Hard Bar */}
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850">
                            <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                                <span className="text-rose-500">Hard</span>
                                <span className="text-slate-700 dark:text-slate-300 font-mono">
                  {data.hard.solved}{" "}
                                    <span className="text-slate-400 font-normal">/ {data.hard.total}</span>
                </span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                                <motion.div
                                    initial={{width: 0}}
                                    animate={{width: `${hardPct}%`}}
                                    transition={{duration: 1, delay: 0.4}}
                                    className="h-full bg-rose-500 rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Highlights & Badges Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850 text-center">
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                            Contest Rating
                        </div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white font-mono mt-0.5">
                            {data.contest.rating}
                        </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850 text-center">
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                            Global Rank
                        </div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white font-mono mt-0.5">
                            #{data.ranking.toLocaleString()}
                        </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850 text-center">
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-medium flex items-center justify-center gap-1">
                            <Flame size={12} className="text-amber-500" />
                            Streak
                        </div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white font-mono mt-0.5">
                            {data.calendar.streak} Days
                        </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850 text-center">
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-medium flex items-center justify-center gap-1">
                            <Award size={12} className="text-purple-400" />
                            Active Days
                        </div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white font-mono mt-0.5">
                            {data.calendar.totalActiveDays} Days
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
