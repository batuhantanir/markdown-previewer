import React from "react";
import InputText from "./components/InputText";
import OutputText from "./components/OutputText";
import HelpButton from "./components/HelpButton";

function App() {
  return (
    <div className="bg-[#FFCD38] h-screen">
      <div className="flex justify-end">
        <HelpButton />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Markdown Previewer</h1>
        <div className="flex justify-center w-[100%] mt-5">
          <InputText />
          <OutputText />
        </div>
      </div>
    </div>
  );
}

export default App;
