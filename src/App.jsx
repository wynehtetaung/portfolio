import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";

export default function App() {
  return (
    <div className="background">
      <div className="box">
        <Header />
        <Body />
      </div>
    </div>
  );
}
