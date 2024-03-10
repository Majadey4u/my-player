import dami from "../assets/dami.jpg";
import ade from "../assets/ade.jpeg";
import jack from "../assets/jack.jpeg";
import luis from "../assets/luis.jpeg";

// This is how an array of objects look like. You'll be seeing these a lot when you start learning REST APIs

export const players = [
  {
    name: "Dami",
    team: "FC Barcelona",
    nationality: "Nigerian",
    jerseyNumber: 10,
    age: 20,
    imageUrl: dami,
  },
  {
    name: "Ade",
    team: "Inter Miami",
    nationality: "Nigerian",
    jerseyNumber: 7,
    age: 22,
    imageUrl: ade,
  },
  {
    name: "Luis",
    team: "Real Madrid",
    nationality: "Nigerian",
    jerseyNumber: 8,
    age: 24,
    imageUrl: jack,
  },
  {
    name: "Oreva",
    team: "Arsenal",
    nationality: "Nigerian",
    jerseyNumber: 9,
    age: 21,
    imageUrl: luis,
  },
];
