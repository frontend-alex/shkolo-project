'use client'

import axios from "axios";
import React, {  useState, useEffect } from "react";

const FeedController = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState<string>("");
  const [searchedResults, setSearchedResults] = useState<any>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await axios.get('/api/posts')
      setAllPosts(posts.data)
    }
    fetchPosts()
  }, [])
 
  return { searchText, searchedResults, allPosts};
};

export default FeedController;
