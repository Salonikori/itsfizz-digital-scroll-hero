import FizzCan from "./FizzCan";
import { HEADLINE_WORDS, STATS } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="progress" aria-hidden="true">
        <div className="progress-bar" />
      </div>

      <div className="hero-kicker reveal">
        <span className="kicker-dot" /> The bright side of refreshment
      </div>

      {/* Each letter is its own span so it can be animated separately. */}
      <h1 className="hero-title" id="hero-heading" aria-label="Welcome Itz Fizz">
        {HEADLINE_WORDS.map((word) => (
          <span className="word" key={word} aria-hidden="true">
            {word.split("").map((letter, index) => (
              <span className="letter" key={index}>{letter}</span>
            ))}
          </span>
        ))}
      </h1>

      <div className="product-glow" aria-hidden="true" />
      <div className="stage">
        <div className="can">
          <FizzCan />
        </div>
      </div>

      <p className="hero-index reveal">Citrus energy / No. 001</p>
      <p className="hero-end" aria-hidden="true">Open a brighter moment.</p>

      <div className="hero-bottom">
        <p className="hero-copy reveal">
          <strong>Big flavour. Bright energy.</strong>
          <br />
          A little sparkle for the everyday. Made for the moments that deserve a little more.
        </p>

        <div className="stats">
          {STATS.map(({ value, label }) => (
            <div className="stat" key={label[0]}>
              <div className="stat-number">
                <span className="stat-value">{value}</span>%
              </div>
              <div className="stat-label">
                {label[0]}
                <br />
                {label[1]}
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-cue reveal">
          <i /> Scroll to feel it
        </div>
      </div>
    </section>
  );
}
