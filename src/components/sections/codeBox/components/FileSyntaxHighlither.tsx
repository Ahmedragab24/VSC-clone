import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Iprops {
  content: string | undefined;
}

const FileSyntaxHighlither = ({ content }: Iprops) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{
        backgroundColor: "transparent",
        maxWidth: "100%",
        overflow: "hidden",
        fontSize: "1.1rem",
      }}
      showLineNumbers
    >
      {String(content)}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlither;
