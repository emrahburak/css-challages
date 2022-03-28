import Card from "../Card";
import {useState} from 'react';

const LeftSidBar = ({ posts }) => {
  return (
    <div>
      Kim Ne dio?
      {posts.map((post, pos) => {
        if (post.like >= 200)
          return <Card key={post.id} appearance={"left"} post={post} />;
      })}
    </div>
  );
};

export default LeftSidBar;
