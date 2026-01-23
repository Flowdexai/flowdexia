'use client';

import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    width?: "fit-content" | "100%";
}

export const TextReveal = ({ text, className = "", delay = 0, width = "fit-content" }: TextRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-5%" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.015,
                delayChildren: delay,
            },
        },
    };

    const childVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: 0,
            filter: "blur(2px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const words = text.split(" ");

    return (
        <div ref={ref} style={{ width }} className={className}>
            <motion.p
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="inline-block"
                style={{ whiteSpace: 'pre-wrap' }}
            >
                {words.map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
                        {word.split("").map((char, charIndex) => (
                            <motion.span
                                variants={childVariants}
                                key={`${wordIndex}-${charIndex}`}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                ))}
            </motion.p>
        </div>
    );
};
