import "./App.css";
import Data from "./data.js";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Card from "../components/card";

function App() {

  const cards = Data.map(function (item) {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero/>
      <section className="cards--list">{cards}</section>
    </>
  );
}

export default App;
