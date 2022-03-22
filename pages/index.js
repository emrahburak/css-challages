import Header from "../components/header";
import MainContent from "../components/main-content";
import LeftSideBar from "../components/left-sidebar";
import RightSideBar from "../components/right-sidebar";

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
