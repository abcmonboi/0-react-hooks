"use client";

import { Globe2Icon, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export function NavActions() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const data = useMemo(
    () => [
      [
        {
          key: "en",
          label: "English",
        },
        {
          key: "vi",
          label: "Vietnamese",
        },
      ],
    ],
    []
  );

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/");
    if (locale === segments[1]) {
      setIsOpen(false);
      return;
    }
    segments[1] = locale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <Button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        variant="ghost"
        size="icon"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="data-[state=open]:bg-accent h-7 w-7"
          >
            <Globe2Icon />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-fit overflow-hidden rounded-lg p-0"
          align="end"
        >
          <Sidebar collapsible="none" className="bg-transparent">
            <SidebarContent>
              {data.map((group, index) => (
                <SidebarGroup key={index} className="border-b last:border-none">
                  <SidebarGroupContent className="gap-0">
                    <SidebarMenu>
                      {group.map(({ label, key }) => (
                        <SidebarMenuItem key={key}>
                          <SidebarMenuButton onClick={() => switchLocale(key)}>
                            <span>{label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </SidebarContent>
          </Sidebar>
        </PopoverContent>
      </Popover>
    </div>
  );
}
