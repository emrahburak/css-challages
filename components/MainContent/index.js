import Banner from "../Banner";
import Card from "../Card";
import CheckboxComponent from "../CheckboxComponent";

const MainContent = ({posts,checkboxItems}) => {
  return (
    <main className="main-content">
      <Banner />
      <CheckboxComponent appearance={true} />
      {[...Array(2)].map((index, pos) => (
        <Card key={pos} status={"main-content"} />
      ))}
    </main>
  );
};

export default MainContent;
