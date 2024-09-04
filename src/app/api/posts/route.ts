import { db } from "@lib/db"
import Post from "@models/Post";

export const GET = async (req: Request, res: Response) => {
    try{
        
        await db();

        const posts = await Post.find().lean();
        return new Response(JSON.stringify(posts), { status: 201 });

    } catch(err){
        console.log(err)
        return new Response("Failed to fetch", { status: 500 })
    }
}