import React from "react";
import { setIsShowingHelp } from "../store/MarkDownSlice/MarkDownSlice";
import { useDispatch, useSelector } from "react-redux";

const HelpButton = () => {
  const dispatch = useDispatch();
  const isShowingHelp = useSelector((state) => state.markDown.isShowingHelp);

  return (
    <button
      className={`px-5 py-3 bg-[#FFEEB4] text-2xl font-extrabold ${isShowingHelp == false && "shadow-costum"}`}
      onClick={() => {
        dispatch(setIsShowingHelp());
      }}
    >
      ?
    </button>
  );
};

export default HelpButton;
