'use client'

import Intro from "@/components/Intro";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "../components/ui/particles";
import Meteors from '../components/ui/meteors';
import WorkExperience from "@/components/WorkExperience";
import BlurFade from "@/components/ui/blur-fade";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { CustomDock } from "@/components/CustomDock";

export default function Home() {

    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(resolvedTheme === "light" 
            ? "#000000"
            : "#ffffff"); 
    }, [resolvedTheme]);

    return (
        <>
            <div className="relative overflow-hidden border-4 border-gray-400 min-h-screen">
                <Meteors number={50} />
                <Particles
                    className="absolute inset-0"
                    quantity={400}
                    ease={40}
                    color={color}
                    refresh
                    size={2}
                />
                <BlurFade delay={0.5} inView>
                    <div className="w-full xl:w-8/12 mx-auto items-center justify-items-center p-8 pb-20 gap-16 sm:p-8 md:p-12 font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
                        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                            <Intro />
                            <WorkExperience />
                            <Education />
                            <Skills />
                            <Projects />
                        </main>
                    </div>
                </BlurFade>
                            <CustomDock orientation="vertical" />
            </div>
        </>
    );
}
