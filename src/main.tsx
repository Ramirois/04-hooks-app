import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { ScrambleWords } from "./05-useReducer/Scramblewords";
import "./index.css";
import { MemoHook } from "./06-memos/MemoHook";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithEffectWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    <MemoHook />
  </StrictMode>
);
