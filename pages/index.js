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
          <div className="left-wrapper">
            <LeftSideBar />
          </div>
          <div className="main-wrapper">
            <MainContent />
          </div>
          <div className="right-wrapper">
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
