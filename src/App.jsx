import React, { useState } from "react";
import { useDogs } from "./providers/dog-provider";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import "./App.css";
import "./fonts/RubikBubbles-Regular.ttf";

function App() {
  const { showComponent } = useDogs();

  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <Section label={"Dogs: "}>
        {["all-dogs", "favorite-dogs", "unfavorite-dogs"].includes(
          showComponent
        ) && <Dogs />}
        {showComponent === "create-dog-form" && <CreateDogForm />}
      </Section>
    </div>
  );
}

export default App;
