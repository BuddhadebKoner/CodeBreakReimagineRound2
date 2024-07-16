import IconCloud from "@/components/magicui/icon-cloud";

export default function Home() {
  const iconSlugs = [
   "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
]; // Add the desired icon slugs here

  return (
    <div>
      <IconCloud iconSlugs={iconSlugs} />
    </div>
  );
}
