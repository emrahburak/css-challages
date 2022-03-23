import Header from "../components/Header";
import MainContent from "../components/MainContent";
import LeftSideBar from "../components/LeftSidebar";
import RightSideBar from "../components/RightSidebar";

const HomePage = () => {
  return (
    <>
      <div className="layout-container">
        <div className="header-wrapper">
          <Header />
        </div>
        <div className="content-wrapper">
          <LeftSideBar />
          <MainContent />
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default HomePage;
