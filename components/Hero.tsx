import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="bg-[#f1f5f8] flex flex-col items-center justify-center h-[80vh] gap-y-4">
      <h1 className="font-bold text-5xl text-center">
        Platonic Grade help you to calculate <br className="mb-6" />
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 rounded-xl">
          your GPA easily
        </span>
      </h1>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto"
        )}
      >
        Platonic Grader simplifies Platonus grades, offering easy-to-use tools
        for students. Effortlessly track, calculate, and analyze academic
        progress with precision. Elevate your educational journey with
        insightful grade breakdowns and intuitive features. Unlock your grades
        effortlessly with Platonic Grader.
      </div>
      <Link href={"/sign-in"}>
        <Button>Calculate Grades</Button>
      </Link>
    </section>
  );
};

export default Hero;
