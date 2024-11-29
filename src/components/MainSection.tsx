import { PanelLeftOpenIcon, PanelRightOpenIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import TextEditor from "@/components/TextEditor";
import Preview from "@/components/Preview";

const MainSection = () => {
  return (
    <main className="px-6 bg-black">
      <div className="h-14 flex items-center justify-end gap-x-1">
        <Button variant={"ghost"} size={"icon"}>
          <PanelRightOpenIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <PanelLeftOpenIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </div>
      <section className="w-full main_height grid grid-cols-2">
        <TextEditor />
        <Preview />
      </section>
    </main>
  );
};
export default MainSection;
