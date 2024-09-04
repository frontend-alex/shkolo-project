import axios from 'axios'

/**
 * Asynchronously creates a new post by sending a POST request to the server.
 *
 * @param {TCreatePost} postData - The data for creating a post, including the creator's name and the content of the post.
 * @param {string} postData.creator - The name of the post creator.
 * @param {string} postData.postContent - The content of the post.
 * @param {string} postData.postHeading - The heading of the post.
 * 
 * @returns {Promise<any>} The response data from the server.
 * 
 * @throws Will throw an error if the request fails.
 */

export type TCreatPost = {
    creator: string,
    postContent: string,
    postHeading: string;
}

const craetePost = async ({ creator, postHeading, postContent }: TCreatPost ): Promise<any> => {
    try{
        console.log(creator, postHeading, postContent)
        const response = axios({
            method: "POST",
            url: "/api/posts/create",
            data: {
                creator,
                postContent,
                postHeading
            }
        })

        return response;

    } catch(err: any){
        return { status: err.status }
    }
}

export default craetePost