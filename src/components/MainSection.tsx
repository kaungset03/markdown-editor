import TextEditor from "@/components/TextEditor";
import Preview from "@/components/Preview";
import { useState } from "react";

const MainSection = () => {
  const [text, setText] = useState("");

  const onChange = (text: string) => {
    setText(text);
  };

  return (
    <main>
      {/* <div className="h-14 flex items-center justify-end gap-x-1">
        <Button variant={"ghost"} size={"icon"}>
          <PanelRightOpenIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <PanelLeftOpenIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </div> */}
      <section className="w-full main_height grid grid-cols-[1fr,1px,1fr]">
        <TextEditor text={text} onChange={onChange} />
        <div className="w-full h-full bg-foreground"/>
        <Preview markdown={text} />
      </section>
    </main>
  );
};
export default MainSection;
