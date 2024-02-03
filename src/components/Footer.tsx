import Link from "next/link";

export default function Footer() {
  return (
    <div className="justify-center flex mb-5 font-mono">
      <h2>Developed by</h2>{" "}
      <Link
        className="ml-1 underline text-indigo-600"
        href={"https://www.linkedin.com/in/luca-malli-013453231/"}
      >
        Luca Malli
      </Link>
    </div>
  );
}
