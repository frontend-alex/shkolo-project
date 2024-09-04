import { db } from "@lib/db"
import Post from "@models/Post";

export const GET = async (req: Request, res: Response) => {
    try{
        
        await db();

        const posts = Post.find({}).populate('creator');
        return new Response(JSON.stringify(posts), { status: 201 });

    } catch(err){
        return new Response("Failed to fetch", { status: 500 })
    }
}