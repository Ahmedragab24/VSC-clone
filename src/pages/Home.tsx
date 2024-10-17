import ResizeablePanel from "../components/ui/ResizeablePanel";
import CodeBox from "../components/sections/codeBox/CodeBox";
import Sidebar from "../components/sections/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <ResizeablePanel
        leftPanel={<Sidebar />}
        rightPanel={<CodeBox />}
        showLeftPanel
      />
    </div>
  );
};

export default Home;
