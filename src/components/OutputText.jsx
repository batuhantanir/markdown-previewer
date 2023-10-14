import React from "react";
import Markdown from "react-markdown";
import { useSelector } from "react-redux";
import remarkGfm from "remark-gfm";

const OutputText = () => {
  const textPreview = useSelector((state) => state.markDown.textPreview);
  return (
    <article
      className=" bg-[#FFDD67]  ml-3 prose lg:prose-xl w-5/12 h-96 overflow-auto p-5 shadow-costum "
      disabled
    >
      <Markdown remarkPlugins={[remarkGfm]}>{textPreview}</Markdown>
    </article>
  );
};

export default OutputText;
