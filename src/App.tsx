import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";

const App = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <Header />
        <MainSection />
      </div>
    </SidebarProvider>
  );
};
export default App;
