import Markdown from "markdown-to-jsx";

type PreviewProps = {
  markdown: string;
};

const Preview = ({ markdown }: PreviewProps) => {
  return (
    <div className="prose p-3 text-inherit">
      <Markdown>{markdown}</Markdown>
    </div>
  );
};
export default Preview;
