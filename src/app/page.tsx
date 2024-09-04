'use client'

import Feed from "@components/Feed";
import React, { useState } from "react";

const page = () => {

  const [ expandAll, setExpandAll ] = useState<boolean>(false)

  return (
    <section className="w-full flex-center flex-col gap-5 ">
      <div className={`${ expandAll ? "hidden" : "flex"} flex-col transition-all`}>
        <h1 className="head_text text-center">
          Tired of Shkolo&apos;s
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center"> Grading Nonsense</span>
        </h1>
        <p className="desc text-center">
          Tired of Shkolo messing with your grades? GradeEcho is the place to
          let it all out. Whether you&apos;re annoyed, confused, or just over
          it, share your thoughts here. Join the convo and see what others are
          saying too. Let&apos;s keep it real.
        </p>
      </div>

      <Feed setExpandAll={setExpandAll} expandAll={expandAll} />
    </section>
  );
};

export default page;
