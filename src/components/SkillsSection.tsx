import { Badge } from "./ui/badge";

export default function SkillsSection() {
  const skills: string[] = [
    "Typescript",
    "Javascript",
    "CSS",
    "HTMl",
    "Java",
    "Laravel",
    "PHP",
    "VueJS",
    "NuxtJS",
    "NextJS",
    "React",
    "C",
    "JavaSpring",
  ];

  return (
    <div className="flex flex-col justify-center md:mt-[200px] lg:mt-[200px] p-8">
      <div className="flex justify-center font-mono">
        <span className="font-bold text-5xl">My</span>
        <span className="text-[#3F0071] font-bold text-5xl ml-2">Skills</span>
      </div>

      <div className="flex justify-center flex-wrap gap-2 md:gap-0  space-x-3 mt-4">
        {skills.map((s) => {
          return (
            <Badge key={s} className="bg-[#130050] text-lg  p-4 ">
              {s}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
