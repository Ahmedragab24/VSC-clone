import { ChevronDown, ChevronRight } from "lucide-react";
import { IFile } from "../../../../interfaces";
import { useState } from "react";
import RenderFileIcon from "../../../ui/RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFile,
  setOpenFile,
} from "../../../../Store/features/fileTreeSlice";
import { RootState } from "../../../../Store/store";
import { doesFileObjectExist } from "../../../../utils/function";

interface Iprops {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: Iprops) => {
  const { id, isFolder, name, children, content } = fileTree;
  const dispatch = useDispatch();
  const { openFile } = useSelector((state: RootState) => state.tree);
  const [isOpenFolder, setIsOpenFolder] = useState<boolean>(false);

  // Handlers
  const toggle = () => {
    setIsOpenFolder((prev) => !prev);
  };

  const onFileClicked = () => {
    const exists = doesFileObjectExist(openFile, id);
    dispatch(
      setClickedFile({ fileContent: content, fileName: name, activeTabId: id })
    );
    if (exists) return;
    dispatch(setOpenFile([...openFile, fileTree]));
  };

  return (
    <div className="cursor-pointer ml-2">
      <div className="flex  mb-1 ">
        {isFolder ? (
          isOpenFolder ? (
            <ChevronDown width={18} />
          ) : (
            <ChevronRight width={18} />
          )
        ) : null}
        <div className="flex space-x-1">
          {isFolder ? (
            <div className="flex items-center space-x-1" onClick={toggle}>
              <RenderFileIcon
                fileName={name}
                isFolder={isFolder}
                isOpenFolder={isOpenFolder}
              />
              <span>{name}</span>
            </div>
          ) : (
            <div
              className="flex items-center space-x-1"
              onClick={onFileClicked}
            >
              <RenderFileIcon fileName={name} />
              <span>{name}</span>
            </div>
          )}
        </div>
      </div>
      {isOpenFolder &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent key={idx} fileTree={file} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
