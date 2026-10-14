export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-[clamp(20px,5vw,76px)] py-7 text-white max-[700px]:pt-5"
    >
      <a href="#" aria-label="itsfizz digital home" className="text-[1.35rem] font-black tracking-[-0.08em]">
        its<span className="text-lime">✳</span>fizz <span className="font-normal tracking-normal opacity-70">digital</span>
      </a>

      <p className="text-[.68rem] uppercase tracking-[.2em] opacity-80 max-[700px]:hidden">
        A little more life in every sip
      </p>

      <a
        href="#story"
        className="rounded-full border border-white/40 px-4 py-2.5 text-[.7rem] uppercase tracking-[.14em]"
      >
        Discover <span aria-hidden="true">↘</span>
      </a>
    </nav>
  );
}
