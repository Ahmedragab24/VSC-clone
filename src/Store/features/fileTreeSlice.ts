import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IclickedFile {
  activeTabId: string | null;
  fileName: string;
  fileContent: string | undefined;
}

interface IinitailState {
  openFile: IFile[];
  clickedFile: IclickedFile;
  tabToRemove: string | null;
}

const initialState: IinitailState = {
  openFile: [],
  clickedFile: {
    activeTabId: null,
    fileName: "",
    fileContent: "",
  },
  tabToRemove: null,
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenFile: (state, action: PayloadAction<IFile[]>) => {
      state.openFile = action.payload;
    },
    setClickedFile: (state, action: PayloadAction<IclickedFile>) => {
      state.clickedFile.fileContent = action.payload.fileContent;
    },
    setTapIdRemove: (state, action: PayloadAction<string | null>) => {
      state.tabToRemove = action.payload;
    },
  },
});

export const { setOpenFile, setClickedFile, setTapIdRemove } =
  fileTreeSlice.actions;

export default fileTreeSlice;
