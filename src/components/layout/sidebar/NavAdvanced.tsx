import { ChevronRight, MoreHorizontal, Plus } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function NavAdvanced({
  advanced,
}: {
  advanced: {
    name: string;
    url?: string;
    emoji: React.ReactNode;
    pages: {
      name: string;
      emoji: React.ReactNode;
      url?: string;
    }[];
  }[];
}) {
  const t = useTranslations("Layout.sidebar.nav");
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{t("advanced")}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {advanced.map((item) => (
            <Collapsible key={item.name}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={item.url ?? "#"}>
                    <span>{item.emoji}</span>
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
                <CollapsibleTrigger asChild>
                  <SidebarMenuAction
                    className="left-2 bg-sidebar-accent text-sidebar-accent-foreground data-[state=open]:rotate-90"
                    showOnHover
                  >
                    <ChevronRight />
                  </SidebarMenuAction>
                </CollapsibleTrigger>
                <SidebarMenuAction showOnHover>
                  <Plus />
                </SidebarMenuAction>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.pages.map((page) => (
                      <SidebarMenuSubItem key={page.name}>
                        <SidebarMenuSubButton asChild>
                          <Link href={page?.url ?? ""}>
                            <span>{page.emoji}</span>
                            <span>{page.name}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton className="text-sidebar-foreground/70">
              <MoreHorizontal />
              <span>More</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
