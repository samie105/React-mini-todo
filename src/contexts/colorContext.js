import { createContext, useState } from "react";

export const ColorContext = createContext();

const ColorContextProvider = (props) => {
  const [color] = useState([
    { primary: "#d54359", btn: "#301217" },
    { primary: "#5e176a", btn: "#18091A" },
    { primary: "#27b09c", btn: "#0C2824" },
    { primary: "00000000", btn: "00000000" },
  ]);

  const [explvl] = useState({
    beginner: "#ec3919cb",
    medium: "#B09C27",
    advanced: "#69C45E",
  });

  const [colorState, setColorState] = useState(0);
  return (
    <ColorContext.Provider value={{ explvl, color, colorState, setColorState }}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
