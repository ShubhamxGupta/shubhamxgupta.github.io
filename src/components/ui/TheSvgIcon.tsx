"use client";

import React from "react";
import python from "@thesvg/icons/python";
import pytorch from "@thesvg/icons/pytorch";
import cplusplus from "@thesvg/icons/cplusplus";
import fastapi from "@thesvg/icons/fastapi";
import react from "@thesvg/icons/react";
import nextdotjs from "@thesvg/icons/nextdotjs";
import postgresql from "@thesvg/icons/postgresql";
import docker from "@thesvg/icons/docker";
import git from "@thesvg/icons/git";

const customOverrides: Record<string, { svg: string; variants?: { mono?: string; default?: string } }> = {
    tensorflow: {
        svg: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m61.55 128-21.84-12.68V40.55L6.81 59.56l.08-28.32L61.55 0z" fill="#FF6F00"/><path d="M66.46 0v128l21.84-12.68V78.23l16.4 9.48-.09-24.51-16.31-9.42V40.55l32.89 19.01.08-28.32z" fill="#FFA800"/></svg>`,
        variants: {
            default: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m61.55 128-21.84-12.68V40.55L6.81 59.56l.08-28.32L61.55 0z" fill="#FF6F00"/><path d="M66.46 0v128l21.84-12.68V78.23l16.4 9.48-.09-24.51-16.31-9.42V40.55l32.89 19.01.08-28.32z" fill="#FFA800"/></svg>`,
            mono: `<svg viewBox="0 0 128 128" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m61.55 128-21.84-12.68V40.55L6.81 59.56l.08-28.32L61.55 0zm4.91-128v128l21.84-12.68V78.23l16.4 9.48-.09-24.51-16.31-9.42V40.55l32.89 19.01.08-28.32z"/></svg>`,
        },
    },
    opencv: {
        svg: `<svg viewBox="0 0 600 580" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(300, 145)"><path d="M -69.65 120.64 A 139.3 139.3 0 1 1 69.65 120.64 L 27.71 47.99 A 55.42 55.42 0 1 0 -27.71 47.99 Z" fill="#EA2027"/></g><g transform="translate(457, 420) rotate(180)"><path d="M -69.65 120.64 A 139.3 139.3 0 1 1 69.65 120.64 L 27.71 47.99 A 55.42 55.42 0 1 0 -27.71 47.99 Z" fill="#0072C6"/></g><g transform="translate(143, 420) rotate(240)"><path d="M -69.65 120.64 A 139.3 139.3 0 1 1 69.65 120.64 L 27.71 47.99 A 55.42 55.42 0 1 0 -27.71 47.99 Z" fill="#009E49"/></g></svg>`,
        variants: {
            default: `<svg viewBox="0 0 600 580" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(300, 145)"><path d="M -69.65 120.64 A 139.3 139.3 0 1 1 69.65 120.64 L 27.71 47.99 A 55.42 55.42 0 1 0 -27.71 47.99 Z" fill="#EA2027"/></g><g transform="translate(457, 420) rotate(180)"><path d="M -69.65 120.64 A 139.3 139.3 0 1 1 69.65 120.64 L 27.71 47.99 A 55.42 55.42 0 1 0 -27.71 47.99 Z" fill="#0072C6"/></g><g transform="translate(143, 420) rotate(240)"><path d="M -69.65 120.64 A 139.3 139.3 0 1 1 69.65 120.64 L 27.71 47.99 A 55.42 55.42 0 1 0 -27.71 47.99 Z" fill="#009E49"/></g></svg>`,
        },
    },
    kotlin: {
        svg: `<svg viewBox="0 0 256 256" width="256" height="256" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="thesvg-kotlin-gradient"><stop stop-color="#7F52FF" offset="0%"/><stop stop-color="#C711E1" offset="50%"/><stop stop-color="#E44857" offset="100%"/></linearGradient></defs><path fill="url(#thesvg-kotlin-gradient)" d="M256 256H0V0h256L128 128z"/></svg>`,
        variants: {
            default: `<svg viewBox="0 0 256 256" width="256" height="256" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="thesvg-kotlin-gradient"><stop stop-color="#7F52FF" offset="0%"/><stop stop-color="#C711E1" offset="50%"/><stop stop-color="#E44857" offset="100%"/></linearGradient></defs><path fill="url(#thesvg-kotlin-gradient)" d="M256 256H0V0h256L128 128z"/></svg>`,
        },
    },
};

const iconMap: Record<string, { svg: string; variants?: { mono?: string; default?: string } }> = {
    python,
    pytorch,
    tensorflow: customOverrides.tensorflow,
    opencv: customOverrides.opencv,
    cplusplus,
    fastapi,
    react,
    nextdotjs,
    postgresql,
    docker,
    git,
    kotlin: customOverrides.kotlin,
};

interface TheSvgIconProps {
    name: string;
    size?: number;
    className?: string;
    variant?: "default" | "mono";
}

export function TheSvgIcon({
                               name,
                               size = 28,
                               className = "",
                               variant = "default",
                           }: Readonly<TheSvgIconProps>) {
    const iconData = iconMap[name];

    if (!iconData) {
        return null;
    }

    const svgContent =
        variant === "mono" && iconData.variants?.mono
            ? iconData.variants.mono
            : iconData.variants?.default || iconData.svg;

    return (
        <span
            className={`inline-flex items-center justify-center shrink-0 [&>svg]:w-full [&>svg]:h-full ${className}`}
            style={{width: size, height: size}}
            dangerouslySetInnerHTML={{__html: svgContent}}
        />
    );
}
