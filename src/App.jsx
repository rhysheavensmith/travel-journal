import React from "react";
import Header from "./Header";
import Card from "./Card";
import data from "./data";

export default function App() {
  // Map over the data and create a card element
  const cards = data.map((item) => {
    return <Card item={item} key={item.key} />;
  });
  // Return the items to be rendered on the screen
  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}
