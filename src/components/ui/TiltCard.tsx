"use client";

import React, {useRef, useState, MouseEvent} from "react";
import {motion, useSpring} from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    maxTilt?: number;
    glareOpacity?: number;
    perspective?: number;
    scale?: number;
}

export function TiltCard({
                             children,
                             className = "",
                             maxTilt = 12,
                             glareOpacity = 0.2,
                             perspective = 1000,
                             scale = 1.02,
                         }: Readonly<TiltCardProps>) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [glarePos, setGlarePos] = useState({x: 50, y: 50});

    // Smooth spring physics for rotation and scale
    const rotateX = useSpring(0, {stiffness: 300, damping: 25});
    const rotateY = useSpring(0, {stiffness: 300, damping: 25});
    const cardScale = useSpring(1, {stiffness: 300, damping: 25});

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Mouse coordinates relative to card center (-0.5 to 0.5)
        const mouseX = (e.clientX - rect.left) / width - 0.5;
        const mouseY = (e.clientY - rect.top) / height - 0.5;

        // Set rotation values
        rotateX.set(-mouseY * maxTilt);
        rotateY.set(mouseX * maxTilt);

        // Set glare spotlight position in percentage
        const glareX = ((e.clientX - rect.left) / width) * 100;
        const glareY = ((e.clientY - rect.top) / height) * 100;
        setGlarePos({x: glareX, y: glareY});
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        cardScale.set(scale);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        rotateX.set(0);
        rotateY.set(0);
        cardScale.set(1);
    };

    return (
        <div
            style={{perspective: `${perspective}px`}}
            className="relative w-full h-full"
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    scale: cardScale,
                    transformStyle: "preserve-3d",
                }}
                className={`relative overflow-hidden transition-shadow duration-300 ${className}`}
            >
                {children}

                {/* Dynamic Specular Glare (Apple-style) */}
                {isHovered && (
                    <div
                        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 rounded-inherit"
                        style={{
                            background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glareOpacity}), transparent 70%)`,
                        }}
                    />
                )}
            </motion.div>
        </div>
    );
}
