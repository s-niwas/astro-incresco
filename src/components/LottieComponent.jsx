import React from "react";
import { useLottie } from "lottie-react";
import animationData from "../assets/hero.json";

const App = () => {
  const options = {
    animationData: animationData,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default App;
