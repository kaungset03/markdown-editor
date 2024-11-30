type TextEditorProps = {
  text: string;
  onChange: (text: string) => void;
};

const TextEditor = ({ text, onChange }: TextEditorProps) => {
  return (
    <textarea
      placeholder="Type your markdown here..."
      className="w-full h-full bg-background focus:outline-none p-3 text-inherit"
      value={text}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  );
};
export default TextEditor;
