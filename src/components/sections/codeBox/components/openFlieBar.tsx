import { useSelector } from "react-redux";
import { RootState } from "../../../../Store/store";
import OpenFileBarTab from "./OpenFileBarTab";
import FileSyntaxHighlither from "./FileSyntaxHighlither";
import Welcom from "../../../../pages/Welcom";

const openFlieBar = () => {
  const { openFile, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );

  // Handlers
  const openFileHandler = () =>
    openFile.map((item) => <OpenFileBarTab key={item.id} file={item} />);

  return (
    <div>
      <div className="flex flex-row space-x-4 p-1 border-b-[1px]  border-gray-400">
        {openFileHandler()}
      </div>
      <div className="pt-2">
        {openFile.length ? (
          <FileSyntaxHighlither content={clickedFile.fileContent} />
        ) : (
          <Welcom />
        )}
      </div>
    </div>
  );
};

export default openFlieBar;
