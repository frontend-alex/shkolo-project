import { db } from "@lib/db";
import Post from "@models/Post";
import { User }  from "@models/User";

export const POST = async (req: Request) => {
  const { creator, postContent, postHeading } = await req.json();

  try {
    await db();

    const postCreated = await Post.create({
      creator,
      postHeading,
      postContent,
    });

    const updatedUser = await User.findByIdAndUpdate(
      creator,
      {
        $push: { postsMade: postCreated._id },
      },
      { new: true, useFindAndModify: false }
    );

    updatedUser.save();

    return new Response("Successfully created a post!", { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response(
      `An Error has occured, please try again later: ${err}`,
      {
        status: 500,
      }
    );
  }
};
