"use client";

import FeedController from "@controllers/FeedController";

import { TFeed } from "@constants/Types";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { Search, X } from "lucide-react";

const Feed = ({ expandAll, setExpandAll }: TFeed) => {
  const {
    searchText,
    searchedResults,
    allPosts,
  } = FeedController();
  return (
    <section className="flex-col-10">
      <form
        className={`${
          expandAll ? "hidden" : "flex"
        } relative w-full items-center justify-center transition-all`}
      >
        <div className="relative">
          <Search size={15} className="top-[33%] left-3 absolute text-neutral-300"/>
          <input
            type="text"
            placeholder="Search for a tag or a username"
            // value={searchText}
            // onChange={handleSearchChange}
            required
            className="input w-full lg:w-[400px] px-10"
          />
        </div>
      </form>

      {/* All Prompts */}
      <ParallaxScroll
        data={allPosts}
        expandAll={expandAll}
        setExpandAll={setExpandAll}
      />
    </section>
  );
};

export default Feed;
