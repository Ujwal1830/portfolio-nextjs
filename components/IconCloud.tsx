'use client'

import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "java",
  "visualstudiocode",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "flutter",
  "android",
  "nextdotjs",
  "amazonaws",
  "prisma",
  "firebase",
  "postgresql",
  "vercel",
  "git",
  "jira",
  "github",
  "gitlab",
  "nginx",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {

  return (
    <div className="w-full flex flex-1 justify-center">
        <div className="relative flex size-full w-xl items-center justify-center overflow-hidden rounded-lg bg-background">
        <IconCloud iconSlugs={slugs} />
        </div>
    </div>
  );
}
