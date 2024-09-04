import { db } from "@lib/db";
import Post from "@models/Post";
import { User } from "@models/User";

export const POST = async (req: Request, res: Response) => {
  const { creator, postContent, postHeading } = await req.json();

  try {
    await db();

    const user = await User.findOne({ _id: creator })

    await Post.create({
      creator: user,
      postHeading,
      postContent,
    })

    return new Response("Successfully created a post!", { status: 201 });
  } catch (err) {
    return new Response("An Error has occured, please try again later", {
      status: 500,
    });
  }
};
