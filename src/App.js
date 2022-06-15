//импортируем стили
import "./App.css";
import {useState} from "react";

import {Header} from "./components/header";
import {Contents} from "./components/contents";
import {Footer} from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");

  const handleCreateFan = ({name}) => {
    setFan(name);
  };

  return (
    <>
      <Header fan={fan}/>
      <hr />
      <Contents handleCreateFan={handleCreateFan}/>
      <Footer/>
    </>
  );
}
