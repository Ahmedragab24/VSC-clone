import { X } from "lucide-react";
import { IFile } from "../../../../interfaces";
import RenderFileIcon from "../../../ui/RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFile,
  setOpenFile,
  setTapIdRemove,
} from "../../../../Store/features/fileTreeSlice";
import { RootState } from "../../../../Store/store";
import { useState } from "react";
import Dropmenu from "../../../ui/Dropmenu";

interface Iprops {
  file: IFile;
}

const OpenFileBarTab = ({ file }: Iprops) => {
  const dispatch = useDispatch();
  const {
    openFile,
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.tree);
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // Handles
  const onClick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFile({ fileContent: content, fileName: name, activeTabId: id })
    );
  };

  const onRemoveTab = (selectedId: string) => {
    const filtered = openFile.filter((file) => file.id !== selectedId);
    const lastTab = filtered[filtered.length - 1];

    if (!lastTab) {
      dispatch(setOpenFile([]));
      dispatch(
        setClickedFile({
          activeTabId: null,
          fileContent: "",
          fileName: "",
        })
      );
      return;
    }
    const { id, name, content } = lastTab;
    dispatch(setOpenFile(filtered));
    dispatch(
      setClickedFile({
        activeTabId: id,
        fileContent: content,
        fileName: name,
      })
    );
  };

  return (
    <div
      className={`max-w-screen-md flex items-center p-2 border-t-2 cursor-pointer ${
        file.id === activeTabId ? "border-[#515151]" : "border-transparent"
      }`}
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        setMenuPosition({
          x: e.clientX,
          y: e.clientY,
        });
        setShowMenu(true);
        dispatch(setTapIdRemove(file.id));
      }}
    >
      <div className="w-4">
        <RenderFileIcon fileName={file.name} />
      </div>
      <div className="text-gray-400 ">{file.name}</div>
      <X
        size={20}
        className="text-gray-400 p-1 rounded-md hover:bg-gray-200/10"
        onClick={(e) => {
          e.stopPropagation();
          onRemoveTab(file.id);
        }}
      />

      {showMenu && (
        <Dropmenu position={menuPosition} setShowMenu={setShowMenu} />
      )}
    </div>
  );
};

export default OpenFileBarTab;
