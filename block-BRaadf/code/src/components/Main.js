import Banner from "./Banner";
import Cards from "./Cards";
import Paragraph from "./Paragraph";
import Title from "./Title";

function Main({ isDarkMode }) {
  return (
    <>
      <Title text="Text Component" />
      <Paragraph />
      <Title text="Card Component" />
      <Cards />
      <Title text="Banner Component" />
      <Banner isDarkMode={isDarkMode} />
    </>
  );
}

export default Main;
