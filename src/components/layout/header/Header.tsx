import BreadCrumbPage from "@/components/layout/header/BreadCrumbPage";
import { NavActions } from "@/components/layout/header/NavActions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-dropdown-menu";

const Header = () => (
  <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2 z-10">
    <div className="flex flex-1 items-center gap-2 px-3">
      <SidebarTrigger />
      <Separator
        aria-orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadCrumbPage />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="ml-auto px-3">
        <NavActions />
      </div>
    </div>
  </header>
);
export default Header;
