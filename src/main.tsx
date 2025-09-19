import { StrictMode} from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
// import { ScrambleWords } from "./05-useReducer/Scramblewords";
// import { MemoHook } from "./06-memos/MemoHook";
// import { MemoCounter } from "./06-memos/MemoCounter";
// import { InstagromApp } from "./07-useOptimistic/InstagromApp";
// import { ClientInformation } from "./08-use-suspense/ClientInformation";
// import { getUserAction } from "./08-use-suspense/api/get-user.action";

import "./index.css";
import { ProfessionalApp } from "./09-useContext/ProfessionalApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithEffectWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense fallback={(
        <div className="bg-gradient flex flex-col">
            <h1 className="text-2xl">Cargando</h1>
        </div>
    )}>
        <ClientInformation getUSer={getUserAction(1100)}/>
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>
);
