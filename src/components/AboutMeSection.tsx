export default function AboutMeSection() {
  return (
    <div className="flex flex-col items-center md:mt-[200px] lg:mt-[200px] p-8 font-mono">
      <div className="text-center">
        <span className="font-bold text-5xl">About</span>
        <span className="text-[#3F0071] font-bold text-5xl ml-2">Me</span>
      </div>

      <div className="col-md-12 md:mr-96 md:ml-96 p-8 md:p-0 lg:p-0 mt-4 space-y-4 ">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}
