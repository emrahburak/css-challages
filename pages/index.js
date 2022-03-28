import Header from "../components/Header";
import MainContent from "../components/MainContent";
import LeftSideBar from "../components/LeftSidebar";
import RightSideBar from "../components/RightSidebar";

const HomePage = ({posts}) => {
  console.log(posts)
  return (
    <>
      <div className="layout-container">
        <div className="header-wrapper">
          <Header />
        </div>
        <div className="content-wrapper">
          <div className="left-wrapper">
            <LeftSideBar  posts={posts} />
          </div>
          <div className="main-wrapper">
            <MainContent posts={posts}  />
          </div>
          <div className="right-wrapper">
            <RightSideBar  posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;


export async function getStaticProps(){
  const res_users = await fetch("https://randomuser.me/api/?results=50");
  const res_posts = await fetch("http://localhost:3001/posts");
  const new_list = []

  const posts = await res_posts.json();
  const users = await res_users.json();
  // console.log(typeof(users.results))
  users.results.map((index,pos) => {
    if((pos + 1) === posts[pos].id) {
      new_list.push({...posts[pos],picture:index.picture})
    }
    }
  );


  return {
    props: {
      posts: new_list
    }
  }
}
