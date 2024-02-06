export default function AboutMeSection() {
  return (
    <div className="flex flex-col items-center md:mt-[200px] lg:mt-[200px] p-8 font-mono">
      <div className="text-center">
        <span className="font-bold text-5xl">About</span>
        <span className="text-[#3F0071] font-bold text-5xl ml-2">Me</span>
      </div>

      <div className="col-md-12 md:mr-96 md:ml-96 p-8 md:p-0 lg:p-0 mt-4 space-y-4 ">
        <p>
          Hey, I'm Luca, an 18-year-old student at HTBLA Kaindorf. I'm all about
          finding the perfect balance between my two passions: technology and
          sports. When I'm not diving into coding projects or exploring the
          latest tech trends, you'll find me out on the gym, lifting weights or
          hitting the track for a run.
        </p>
        <p>
          I love the thrill of competition and the satisfaction of mastering new
          skills, whether it's in front of a screen or in the great outdoors.
          Life's all about finding what makes you tick, and for me, it's the
          perfect blend of digital innovation and physical activity.
        </p>
      </div>
    </div>
  );
}
