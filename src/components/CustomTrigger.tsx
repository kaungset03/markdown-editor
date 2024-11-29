import { PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

const CustomTrigger = () => {
    const { toggleSidebar } = useSidebar()
  return (
    <Button variant="outline" size="icon" onClick={toggleSidebar}>
      <PanelLeft className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};
export default CustomTrigger;
