import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import data from "../data";

const Home = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  console.log(cards);
  return (
    <div className="Home">
      <Hero />
      <section className="card_lists">{cards}</section>
    </div>
  );
};

export default Home;
