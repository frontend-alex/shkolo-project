"use client";

import ProfileLayout from "@components/layouts/ProfileLayout";
import CreatePostController from "@controllers/CreatePostController";
import { Loader } from "lucide-react";

const CreatePosts = () => {

  const { onChange, path, onSubmit, isPending } = CreatePostController();

  return (
    <div className="w-full">
      <ProfileLayout path={path}>
        <div className="flex-col-5">
          <div className="flex-col-3">
            <h1 className="text-2xl font-bold">Create your post</h1>
            <p className="max-w-[500px]">
              Welcome to your personalized profile page. Share your exceptional
              prompts and inspire others with the power of your imagination
            </p>
          </div>

          <form className="flex-col-3" onSubmit={onSubmit}>
            <div className="flex-col-2">
              <label>Heading</label>
              <input
                name="heading"
                type="text"
                onChange={onChange}
                placeholder="Example..."
                className="input"
              />
            </div>
            <div className="flex-col-2">
              <label>Content</label>
              <textarea
                onChange={onChange}
                name="content"
                className="input min-h-[300px]"
                placeholder="The quick brown fox jump over the white fence.."
              />
            </div>
            <div className="flex justify-end">
              <button disabled={isPending} className="fill-button flex-3">{isPending ? <Loader size={15} className="animate-spin"/> : ""}Create Post</button>
            </div>
          </form>
        </div>
      </ProfileLayout>
    </div>
  );
};

export default CreatePosts;
