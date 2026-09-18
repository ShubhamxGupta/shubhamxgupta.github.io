"use client";

import React, {useRef, MouseEvent} from "react";
import {motion, useSpring} from "framer-motion";

interface MagneticProps {
    children: React.ReactNode;
    className?: string;
    strength?: number;
}

export function Magnetic({
                             children,
                             className = "",
                             strength = 0.25,
                         }: Readonly<MagneticProps>) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useSpring(0, {stiffness: 350, damping: 25, mass: 0.5});
    const y = useSpring(0, {stiffness: 350, damping: 25, mass: 0.5});

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const {clientX, clientY} = e;
        const {left, top, width, height} = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        x.set((clientX - centerX) * strength);
        y.set((clientY - centerY) * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{x, y}}
            className={`inline-flex shrink-0 ${className}`}
        >
            {children}
        </motion.div>
    );
}
