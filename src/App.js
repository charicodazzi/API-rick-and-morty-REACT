import { useState, useEffect } from "react";
import CardPersonajes from "./Components/CardPersonajes";
import Box from "@mui/material/Box";
import "./App.css";

// USE EFFECT ( MÉTODO, recibe dos parámetros obligatorios - una función, un array), EFECTOS EN REACT
//useEffect(() => {}, [])

const App = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  }, []);

  // un efecto nos permite determinar que un codigo se va a ejecutar solo en algunas ocasiones

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        bgcolor: "#c2c2c2",
        p: 2,
      }}
    >
      {personajes.map((personaje) => (
        <CardPersonajes
          img={personaje.image}
          name={personaje.name}
          status={personaje.status}
          species={personaje.species}
        />
      ))}
    </Box>
  );
};

export default App;
