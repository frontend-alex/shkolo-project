"use client";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { Dispatch, SetStateAction, useRef } from "react";
import PostCard from "@components/cards/PostCard";

export const ParallaxScroll = ({
  data,
  className,
  expandAll,
  setExpandAll,
}: {
  data: any[];
  className?: string;
  expandAll?: boolean;
  setExpandAll?: Dispatch<SetStateAction<boolean>> | undefined;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(data.length / 3);

  const firstPart = data.slice(0, third);
  const secondPart = data.slice(third, 2 * third);
  const thirdPart = data.slice(2 * third);

  return (
    <div
      className={cn(
        `relative ${
          expandAll
            ? "lg:h-[40rem] lg:overflow-y-auto"
            : "lg:h-[19rem] overflow-hidden"
        } items-start w-full hover:cursor-all-scroll disable-scrollbar transition-all`,
        className
      )}
      ref={gridRef}
    >
      <motion.div
        className={`h-[20rem] w-full absolute transition-all bottom-0 z-[100] ${
          !expandAll
            ? "bg-white-transparent-gradient dark:bg-none"
            : ""
        }`}
        initial={{ opacity: 1, height: "20rem" }}
        animate={{
          opacity: expandAll ? 0 : 1,
          height: expandAll ? 0 : "20rem",
          overflow: "hidden",
          transitionEnd: {
            display: expandAll ? "none" : "flex",
          },
        }}
        transition={{ duration: 0.5 }}
      />

      <button
        className="hidden lg:flex fixed text-black bg-white border-lg p-2 rounded-lg bottom-10 left-1/2 -translate-x-1/2 z-[10000000000000000000]"
        onClick={() => setExpandAll?.((prev) => !prev)}
      >
        {expandAll ? "Close" : "View All"}
      </button>
      <div
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-3 lg:gap-5"
        ref={gridRef}
      >
        <div className="grid gap-5">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <PostCard {...el} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-5">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <PostCard {...el} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-5">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <PostCard {...el} />
            </motion.div>
          ))}
        </div>
        {expandAll && (
          <div
            className={`h-[20rem] w-full absolute transition-all -bottom-44 flex items-end justify-center ${
              expandAll ? "bg-white-transparent-gradient dark:bg-none" : ""
            }`}
          />
        )}
      </div>
    </div>
  );
};
