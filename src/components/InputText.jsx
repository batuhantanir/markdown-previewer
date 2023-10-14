import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultText, setTexts } from "../store/MarkDownSlice/MarkDownSlice";

const InputText = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState(defaultText);
  const textCurrent = useSelector((state) => state.markDown.textCurrent);
    const isShowingHelp = useSelector((state) => state.markDown.isShowingHelp);

  useEffect(() => {
    dispatch(setTexts(text));
  }, [text]);
  return (
    <textarea
      className="resize-none bg-[#FFDD67] shadow-costum  mr-3 w-5/12  h-96 overflow-auto p-5"
      value={textCurrent}
      onChange={(e) => setText(e.target.value)}
      readOnly={isShowingHelp}
    ></textarea>
  );
};

export default InputText;
