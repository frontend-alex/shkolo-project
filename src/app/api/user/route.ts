import { db } from "@lib/db"
import { User } from "@models/User";

export const GET = async (req: Request, res: Response) => {
    try{
        
        await db();

        const user = await User.findById({}).lean().populate('postsMde')
        return new Response(JSON.stringify(user), { status: 201 });

    } catch(err){
        console.log(err)
        return new Response("Failed to fetch", { status: 500 })
    }
}