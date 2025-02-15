import "./App.css";
import Card from "./Components/Card";

function App() {
  let Details = [
    {
      Title: "Deluxe Villa",
      Sorc: "Deluxe.jpg",
      Price: "$400000",
      Message: "you can't even afford the WiFi bill here",
    },
    {
      Title: "Fancy Villa",
      Sorc: "Fancy.avif",
      Price: "$250000",
      Message: "Fancy? Bro, you can't even buy fancy socks",
    },
    {
      Title: "Modern Villa",
      Sorc: "Modern.jpg",
      Price: "$330000",
      Message: "Too modern for you, go back to your Cave",
    },
    {
      Title: "Minecraft Villa",
      Sorc: "MinecraftM.jpg",
      Price: "420 Diamond",
      Message: "420 diamonds? Bro, you still punch trees for wood",
    },
    {
      Title: "Expensive Villa",
      Sorc: "Expensive.avif",
      Price: "$70000000",
      Message: "You can't even afford the air inside",
    },
    {
      Title: "Cheap Villa",
      Sorc: "Cheap.avif",
      Price: "$40000",
      Message: "Yeah it's cheap, But not for you Brokey",
    },
    {
      Title: "Egyption Villa",
      Sorc: "Egyption.jpg",
      Price: "$370000",
      Message: "Even the Pharaohs had better credit than you",
    },
    {
      Title: "American Villa",
      Sorc: "American.jpeg",
      Price: "$369999",
      Message: "You can't even buy an American burger",
    },
  ];
  return (
    <div className="App">
      {Details.map((i, Count) => {
        return (
          <Card
            key={Count}
            title={i.Title}
            sorc={i.Sorc}
            price={i.Price}
            message={i.Message}
          />
        );
      })}
    </div>
  );
}

export default App;
