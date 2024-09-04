import { db } from "@lib/db";
import Post from "@models/Post";
import { User } from "@models/User";

export const POST = async (req: Request, res: Response) => {
  const { creator, postContent, postHeading } = await req.json();

  try {
    await db();

    const user = await User.findOne({ _id: creator })

    const postCreated = await Post.create({
      creator: user,
      postHeading,
      postContent,
    })
     
    const d = await User.updateOne(
      { _id: creator._id },
      { $push: { postsMade: postCreated._id } } 
    );

    return new Response("Successfully created a post!", { status: 201 });
  } catch (err) {
    console.log(err)
    return new Response(`An Error has occured, please try again later: ${err}`, {
      status: 500,
    });
  }
};
