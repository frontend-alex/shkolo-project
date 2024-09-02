"use client";

import ProfileLayout from "@components/layouts/ProfileLayout";
import CreatePostController from "@controllers/CreatePostController";

const CreatePosts = () => {
  const { data, onChange, path } = CreatePostController();

  // const router = useRouter();
  // const { data: session }: any = useSession();

  // const [myPosts, setMyPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await fetch(`/api/users/${session?.user.id}/posts`);
  //     const data = await response.json();

  //     setMyPosts(data);
  //   };

  //   if (session?.user.id) fetchPosts();
  // }, [session?.user.id]);

  // const handleEdit = (post: { _id: string }) => {
  //   router.push(`/update-prompt?id=${post._id}`);
  // };

  // const handleDelete = async (post: { _id: { toString: () => any } }) => {
  //   const hasConfirmed = confirm(
  //     "Are you sure you want to delete this prompt?"
  //   );

  //   if (hasConfirmed) {
  //     try {
  //       await fetch(`/api/prompt/${post._id.toString()}`, {
  //         method: "DELETE",
  //       });

  //       const filteredPosts = myPosts.filter(
  //         (item: { _id: string }) => item._id !== post._id
  //       );

  //       setMyPosts(filteredPosts);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

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

          <form className="flex-col-3">
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
                name="description"
                className="input min-h-[300px]"
                placeholder="The quick brown fox jump over the white fence.."
              />
            </div>
            <div className="flex justify-end">
              <button disabled className="fill-button">Create Post</button>
            </div>
          </form>
        </div>
      </ProfileLayout>
    </div>
  );
};

export default CreatePosts;
