import Image from 'next/image';


import Header from "../components/Header";
import MainContent from "../components/MainContent";
import LeftSideBar from "../components/LeftSidebar";
import RightSideBar from "../components/RightSidebar";
import CheckboxComponent from "../components/CheckboxComponent";


import rocket from '../styles/image/icon-rocket.png';
import popular from '../styles/image/icon-popular.png';
import expireDate  from '../styles/image/icon-expire-date.png';

import star from '../styles/image/sidebar-icon/icon-star.png';
import hearth from '../styles/image/sidebar-icon/icon-hearth.png';
import person from '../styles/image/sidebar-icon/icon-person.png';



const HomePage = ({posts}) => {
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
            <MainContent posts={posts} />
          </div>
          <div className="right-wrapper">
            <CheckboxComponent appearance={false} />
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

  users.results.map((index,pos) => {
    if((pos + 1) === posts[pos].id) {
      new_list.push({...posts[pos],picture:index.picture})
    }
    }
  );


  return {
    props: {
      posts: new_list,
    }
  }
}
