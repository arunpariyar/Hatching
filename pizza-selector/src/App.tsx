import "./App.css";
import React from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";

interface Props {
  name: string;
  age: number;
}

function App() {
  const bio =
    "Full stack developer that is going to rock the development world !";
  const skills = [
    { info: "html+css", emoji: "😍", color: "#8e6c1d" },
    { info: "javascript", emoji: "🌟", color: "#3e621d" },
    { info: "web design", emoji: "🔭", color: "#9e561d" },
  ];

  return (
    <div>
      <ProfileCard name="Arun Pariyar" bio={bio} skills={skills} />
    </div>
  );
}

//creating component is basically creating a function normally each components will get their new file and are exported.
//functions should always be created in the top level and never inside existing component.
function House() {
  return (
    <div>
      <h2>house</h2>
      <Footer />
      <Dog name="jack" age={12}></Dog>
    </div>
  );
}

function Dog({ name, age }: Props) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </>
  );
}

//components can also be created this way but that is not very intuitive.
function Footer() {
  return React.createElement("footer", null, "This is the footer");
}

export default App;
