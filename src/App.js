import "./styles.css";
import Cards from "./components/Cards";
export default function App() {
  return (
    <>
      <Cards
        title="this is title"
        desc="this is the description of movie"
        link="https://picsum.photos/200/300?grayscale"
      />
    </>
  );
}
