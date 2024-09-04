import createPost from "@hooks/api";
import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useCreatePostMutation } from "@hooks/useMutation";

const CreatePostController = () => {
  const { data: session } = useSession();
  const { mutate, isPending } = useCreatePostMutation();

  const [data, setData] = useState({
    heading: "",
    content: "",
  });

  const [path, setPath] = useState<string>("");

  const { heading, content } = data;

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (heading.length < 3 && content.length < 5) {
      return toast.error(
        "Heading and the content should be above 3-5 characters!"
      );
    }

    mutate({
      postHeading: heading,
      postContent: content,
      creator: session?.user?.id || "Unknown user",
    });
  };

  return { data, onChange, path, onSubmit, isPending};
};

export default CreatePostController;
