import {clsx} from "clsx";
import React from "react";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section({id, className, children}: Readonly<SectionProps>) {
    return (
        <section id={id} className={clsx("py-20 md:py-32 scroll-mt-20", className)}>
            <div className="container mx-auto px-6">{children}</div>
        </section>
    );
}
