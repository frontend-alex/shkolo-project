import Feed from "@components/Feed";
import React from "react";

const page = () => {
  return (
    <section className="min-h-[80vh] w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Tired of Shkolo&apos;s
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Grading Nonsense</span>
      </h1>
      <p className="desc text-center">
        Tired of Shkolo messing with your grades? GradeEcho is the place to let
        it all out. Whether you&apos;re annoyed, confused, or just over it, share
        your thoughts here. Join the convo and see what others are saying too.
        Let&apos;s keep it real.
      </p>

      <Feed />
  </section>
  );
};

export default page;
