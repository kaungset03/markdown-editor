import { SquarePenIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomTrigger from "@/components/CustomTrigger";
import ThemeToggleBtn from "@/components/ThemeToggleBtn";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between px-6 border-b border-b-gray-900">
      <nav className="flex items-center gap-x-8">
        <div className="flex items-center gap-x-3">
          <CustomTrigger />
          <Button variant="outline" size="icon">
            <SquarePenIcon />
          </Button>
        </div>
        <h1 className="text-lg uppercase tracking-[8px]">Markdown</h1>
      </nav>
      <ThemeToggleBtn />
    </header>
  );
};
export default Header;
