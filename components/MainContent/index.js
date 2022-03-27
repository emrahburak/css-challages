import Banner from "../Banner";
import Card from "../Card";
import Navigation from "../Navigation";

const MainContent = () => {
  return (
    <main className="main-content">
      Main
      <Banner />
      <Navigation />
      {[...Array(2)].map((index, pos) => (
        <Card key={pos} status={"main-content"} />
      ))}
    </main>
  );
};

export default MainContent;
