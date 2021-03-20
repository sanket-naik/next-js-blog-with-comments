import Link from "next/link";
import Logo from "./logo/Logo";

export default function Intro() {
  return (
    <section className="Navigation">
      <div className="container mx-auto px-5 headerIcon">
        <Logo/>
      </div>
    </section>
  )
}
