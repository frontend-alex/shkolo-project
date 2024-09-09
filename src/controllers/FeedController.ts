'use client'

import axios from "axios";
import {  useState, useEffect } from "react";

const FeedController = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState<string>("");
  const [searchedResults, setSearchedResults] = useState<any>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      axios.get('/api/posts')
        .then(res => setAllPosts(res.data))
        .catch(err => console.log(err))
    }
    fetchPosts()
  }, [])
 
  return { searchText, searchedResults, allPosts };
};

export default FeedController;
