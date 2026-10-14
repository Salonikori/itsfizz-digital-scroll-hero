export default function StorySection() {
  return (
    <section
      id="story"
      className="grid min-h-[78vh] grid-cols-2 items-center gap-[50px] bg-lime px-[clamp(20px,10vw,150px)] py-[100px] max-[700px]:grid-cols-1 max-[700px]:gap-9 max-[700px]:py-[75px]"
    >
      <div className="story-text">
        <p className="text-[.7rem] uppercase tracking-[.2em]">01 / A brighter kind of pop</p>
        <h2 className="my-5 text-[clamp(2.5rem,6vw,6rem)] font-normal leading-[.92] tracking-[-0.075em]">
          Turn the ordinary
          <br />
          up a notch.
        </h2>
        <p className="max-w-[420px] leading-[1.75] text-[#40452e]">
          Crisp citrus character, a lively little sparkle, and a whole lot of personality.
          This is your reminder to make room for the fun stuff.
        </p>
      </div>

      <div className="story-card rounded bg-[#1a1d15] p-[clamp(24px,4vw,48px)] text-white">
        <p className="text-[.7rem] uppercase tracking-[.2em]">Made for the in-between</p>
        <p className="text-[clamp(4rem,10vw,9rem)] font-black leading-[.95] tracking-[-0.09em] text-lime">
          POP.
        </p>
        <p className="max-w-[250px] leading-relaxed text-[#c9cebd]">
          For the big wins, tiny breaks, long days, and spontaneous plans.
          Open up a brighter moment.
        </p>
      </div>
    </section>
  );
}
