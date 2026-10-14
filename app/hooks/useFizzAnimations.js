import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { STATS } from "../data/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// How far the can slides sideways while scrolling (fraction of viewport width).
const CAN_SHIFT = 0.27;
const MOBILE_BREAKPOINT = 700;

/**
 * Intro animation: kicker -> headline letters -> can -> copy -> stats (with count-up).
 */
function playIntro(root) {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo(".hero-kicker", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.7 })
    .fromTo(
      ".letter",
      { autoAlpha: 0, y: 50, rotateX: -60 },
      { autoAlpha: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.045 },
      "-=0.3"
    )
    .fromTo(
      ".stage",
      { autoAlpha: 0, y: 70, scale: 0.85 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 1.2 },
      "-=0.9"
    )
    .fromTo(".product-glow", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.2 }, "<")
    .fromTo(
      ".hero-copy, .scroll-cue",
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: 0.7 },
      "-=0.6"
    )
    .addLabel("stats", "-=0.4")
    .fromTo(
      ".stat",
      { autoAlpha: 0, y: 26 },
      { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.22 },
      "stats"
    );

  // Count each number up from 0 as its card appears.
  root.querySelectorAll(".stat-value").forEach((el, i) => {
    const counter = { value: 0 };
    el.textContent = "0";

    tl.to(
      counter,
      {
        value: STATS[i].value,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = Math.round(counter.value);
        },
      },
      `stats+=${i * 0.22}`
    );
  });
}

/**
 * Scroll animation: the hero is pinned and one timeline is scrubbed by scroll progress.
 * scrub: 1 adds a second of smoothing so the motion eases instead of snapping.
 */
function setupHeroScroll() {
  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=220%",
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  const shiftX = () =>
    window.innerWidth < MOBILE_BREAKPOINT ? 0 : window.innerWidth * CAN_SHIFT;

  tl
    // can: spin, grow and drift
    .to(".can", { rotate: 360, ease: "power1.inOut", duration: 1 }, 0)
    .to(".can", { scale: 1.3, duration: 1 }, 0)
    .to(".can", { y: () => window.innerHeight * 0.02, duration: 1 }, 0)
    .to(".can, .product-glow", { x: shiftX, ease: "power2.inOut", duration: 0.6 }, 0.4)
    .to(".product-glow", { scale: 1.4, autoAlpha: 0.9, duration: 1 }, 0)

    // headline letters lift away from the centre outwards
    .to(
      ".letter",
      { y: -70, autoAlpha: 0.12, stagger: { each: 0.02, from: "center" }, duration: 0.5 },
      0.15
    )

    // stats and supporting text leave
    .to(".stat", { y: -40, autoAlpha: 0, stagger: 0.08, duration: 0.3 }, 0.1)
    .to(".hero-copy, .scroll-cue, .hero-index, .hero-kicker", { autoAlpha: 0, duration: 0.25 }, 0.05)

    // progress bar and closing line
    .fromTo(".progress-bar", { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0)
    .fromTo(
      ".hero-end",
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, ease: "power2.out", duration: 0.35 },
      0.65
    );
}

/** Reveal-on-scroll for the section below the hero. */
function setupStoryReveals() {
  gsap.fromTo(
    ".story-text",
    { y: 55, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: "#story", start: "top 75%" },
    }
  );

  gsap.fromTo(
    ".story-card",
    { x: 50, autoAlpha: 0, rotate: 7 },
    {
      x: 0,
      autoAlpha: 1,
      rotate: 2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".story-card", start: "top 85%" },
    }
  );
}

/** Without animation, just make sure everything is visible and the numbers are final. */
function showEverythingStatic(root) {
  gsap.set(".reveal, .letter, .stat, .stage, .product-glow", { autoAlpha: 1 });
  root.querySelectorAll(".stat-value").forEach((el, i) => {
    el.textContent = STATS[i].value;
  });
}

export default function useFizzAnimations(rootRef) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const root = rootRef.current;

      mm.add("(prefers-reduced-motion: reduce)", () => showEverythingStatic(root));

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        playIntro(root);
        setupHeroScroll();
        setupStoryReveals();
      });
    },
    { scope: rootRef }
  );
}
