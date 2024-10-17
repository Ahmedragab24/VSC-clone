import FileIcon from "../components/ui/FileIcon";

const Welcom = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-5">
        <h2 className="text-2xl">
          Welcome To Visual Studio Code Clone By
          <span className="block text-center text-cyan-200 hover:text-cyan-400 pt-3 text-xl">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.facebook.com/EngAhmedRagab24"
            >
              Ahmed Ragab
            </a>
          </span>
        </h2>
        <FileIcon src="/icons/vscode.svg" alt="Icon" className="w-40 h-40" />
      </div>
    </div>
  );
};

export default Welcom;
