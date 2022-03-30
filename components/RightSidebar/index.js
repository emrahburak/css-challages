import Card from "../Card";


const RightSideBar = ({ posts }) => {

  return (
    <div className="right-sidebar">
          {posts.map((post, pos) => {
        if (post.like >= 220)
          return <Card key={post.id} appearance={"right"} post={post} />;
      })}


    </div>
  );
};

export default RightSideBar;
