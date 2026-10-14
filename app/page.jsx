"use client";

import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StorySection from "./components/StorySection";
import Footer from "./components/Footer";
import useFizzAnimations from "./hooks/useFizzAnimations";

export default function Home() {
  const pageRef = useRef(null);
  useFizzAnimations(pageRef);

  return (
    <main ref={pageRef} className="overflow-x-clip">
      <Navbar />
      <Hero />
      <StorySection />
      <Footer />
    </main>
  );
}
