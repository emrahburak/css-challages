import Card from "../Card";

const LeftSidBar = ({ posts }) => {
  return (
    <div>
      <p>
        Kim Ne dio?
      </p>
      {posts.map((post, pos) => {
        if (post.like >= 200)
          return <Card key={post.id} appearance={"left"} post={post} />;
      })}

      <style jsx>{`
        p {
          color:rgba(252,57,55,1);
        }

        
        `}
      </style>
    </div>
  );
};

export default LeftSidBar;
