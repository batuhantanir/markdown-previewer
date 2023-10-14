import React from "react";
import { setIsShowingHelp } from "../store/Slices/MarkDownSlice";
import { useDispatch } from "react-redux";

const HelpButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="border px-5 py-3 "
      onClick={() => {
        dispatch(setIsShowingHelp());
      }}
    >
      ?
    </button>
  );
};

export default HelpButton;
