import WorkCard from "@/components/WorkCard";

export default function About() {
  return (
    <div className="font-mono w-full h-screen  mt-20 justify-evenly flex ">
      <div>
        <h2 className="text-3xl font-bold mb-8 flex hover:underline">Work</h2>
        <div className="">
          <WorkCard
            companyTitle="1Tool"
            companyUrl=""
            date="August 2023 - Present"
            workDescription="Fullstack with NuxtJS and Laravel"
            description="Software Developer"
            languages={["NuxtJS", "Laravel", "PHP", "VueJS"]}
          />
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-8 flex hover:underline">
          Projects
        </h2>
        <div className="">
          <WorkCard
            companyTitle="FitFy"
            companyUrl=""
            date="Fitness Tracker App"
            workDescription="A Fitness Tracker app "
            languages={["NextJS", "React", "Express", "TailwindCSS"]}
          />
        </div>
      </div>
    </div>
  );
}
