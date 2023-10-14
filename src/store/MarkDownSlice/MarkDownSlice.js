import { createSlice } from "@reduxjs/toolkit";

const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears
`;
export const defaultText = `### Welcome to my React Markdown Previewer!`;

export const MarkDownSlice = createSlice({
  name: "markdown",
  initialState: {
    textCurrent: defaultText,
    textPreview: defaultText,
    textHelp: help,
    isShowingHelp: false,
  },
  reducers: {
    setTexts: (state, action) => {
      state.textCurrent = action.payload;
      state.textPreview = action.payload;
    },
    setIsShowingHelp: (state) => {
      state.isShowingHelp = state.isShowingHelp ? false : true;

      if (state.isShowingHelp === true) {
        state.textCurrent = state.textHelp;
        state.textPreview = state.textHelp;
      } else {
        state.textCurrent = defaultText;
        state.textPreview = defaultText;
      }
    },
  },
});

export const { setTexts, setIsShowingHelp } = MarkDownSlice.actions;

export default MarkDownSlice.reducer;
