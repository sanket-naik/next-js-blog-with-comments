import Link from "next/link";
import Logo from "./logo/logo";

export default function Intro() {
  return (
    <section className="Navigation">
      <div className="container mx-auto px-5 headerIcon">
        <Logo/>
      </div>
    </section>
  )
}
