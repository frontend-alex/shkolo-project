import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }: any) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post: any) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))} 
    </div>
  );
};

export default PromptCardList;
