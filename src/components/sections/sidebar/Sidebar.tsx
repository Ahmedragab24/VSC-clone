import { fileTree } from "../../../data/fileTree";
import RecursiveComponent from "./components/RecursiveComponent";

const Sidebar = () => {
  return (
    <div className="bg-slate-950  h-screen p-3  border-r-2 border-gray-500">
      <RecursiveComponent fileTree={fileTree} />
    </div>
  );
};

export default Sidebar;
