import Editor from "@monaco-editor/react";
import useThemeContext from "@/hooks/useThemeContext";

type TextEditorProps = {
  text: string;
  onChange: (text: string) => void;
};

const TextEditor = ({ text, onChange }: TextEditorProps) => {
  const { theme } = useThemeContext()
  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      onChange(value);
    }
  };
  return (
    <Editor
      className="w-full h-full"
      theme={theme === "dark" ? "vs-dark" : "light"}
      defaultLanguage="markdown"
      defaultValue="// some comment"
      value={text}
      onChange={handleEditorChange}
    />
  );
};
export default TextEditor;
