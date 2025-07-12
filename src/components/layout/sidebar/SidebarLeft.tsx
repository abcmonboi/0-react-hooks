"use client";

import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  BookOpenCheck,
  Calendar,
  CodeXml,
  Command,
  Home,
  IceCreamIcon,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
  Wrench,
} from "lucide-react";

import { NavHook } from "@/components/layout/sidebar/NavHook";
import { NavMain } from "@/components/layout/sidebar/NavMain";
import { NavSecondary } from "@/components/nav-secondary";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavAdvanced } from "@/components/layout/sidebar/NavAdvanced";

// This is sample data.
const data = {
  teams: [
    {
      name: "ABboy",
      logo: IceCreamIcon,
      plan: "Enterprise",
    },
    {
      name: "AB Sound",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "AB Coding  ",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "React",
      url: "/react",
      icon: Sparkles,
    },
    {
      title: "Lessons",
      url: "/lessons",
      icon: BookOpenCheck,
    },
    {
      title: "Html",
      url: "/html",
      icon: CodeXml,
      badge: "10",
    },
    {
      title: "Testing",
      url: "/testing",
      icon: Wrench,
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Templates",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  hooks: [
    {
      name: "useState",
      url: "/react/hooks/use-state",
      emoji: "📊",
    },
    {
      name: "useEffect",
      url: "/react/hooks/use-effect",
      emoji: "🍳",
    },
    {
      name: "UseLayoutEffect",
      url: "/react/hooks/use-layout-effect",
      emoji: "💪",
    },
    {
      name: "UseRef",
      url: "/react/hooks/use-ref",
      emoji: "📚",
    },
    {
      name: "useCallBack()",
      url: "/react/hooks/use-call-back",
      emoji: "🌱",
    },
    {
      name: "useMemo()",
      url: "/react/hooks/use-memo",
      emoji: "🗣️",
    },
    {
      name: "useReducer()",
      url: "/react/hooks/use-reducer",
      emoji: "🏠",
    },
    {
      name: "useContext()",
      url: "/react/hooks/use-context",
      emoji: "💰",
    },
    {
      name: "...2",
      url: "#",
      emoji: "🎬",
    },
    {
      name: "...3",
      url: "#",
      emoji: "✅",
    },
  ],
  advanced: [
    {
      name: "Git & Version Control",
      emoji: "🏠",
      url: "git",
      pages: [
        {
          name: "Daily Journal & Reflection",
          url: "#",
          emoji: "📔",
        },
        {
          name: "Health & Wellness Tracker",
          url: "#",
          emoji: "🍏",
        },
        {
          name: "Personal Growth & Learning Goals",
          url: "#",
          emoji: "🌟",
        },
      ],
    },
    {
      name: "Npm Commands & Scripts",
      emoji: "💼",
      url: "npm",
      pages: [
        {
          name: "Career Objectives & Milestones",
          url: "#",
          emoji: "🎯",
        },
        {
          name: "Skill Acquisition & Training Log",
          url: "#",
          emoji: "🧠",
        },
        {
          name: "Networking Contacts & Events",
          url: "#",
          emoji: "🤝",
        },
      ],
    },
    {
      name: "Next",
      emoji: "🎨",
      url: "next",
      pages: [
        {
          name: "API Reference & Documentation",
          url: "next/api-reference",
          emoji: "📖",
        },
        {
          name: "Art & Design Portfolio",
          url: "#",
          emoji: "🖼️",
        },
        {
          name: "Music Composition & Practice Log",
          url: "#",
          emoji: "🎵",
        },
      ],
    },
    {
      name: "Nodejs",
      url: "/nodejs",
      emoji: "🏡",
      pages: [
        {
          name: "backend",
          url: "nodejs/backend",
          emoji: "💰",
        },
        {
          name: "Home Maintenance Schedule & Tasks",
          url: "#",
          emoji: "🔧",
        },
        {
          name: "Family Calendar & Event Planning",
          url: "#",
          emoji: "📅",
        },
      ],
    },
    {
      name: "Travel & Adventure",
      emoji: "🧳",
      pages: [
        {
          name: "Trip Planning & Itineraries",
          url: "#",
          emoji: "🗺️",
        },
        {
          name: "Travel Bucket List & Inspiration",
          url: "#",
          emoji: "🌎",
        },
        {
          name: "Travel Journal & Photo Gallery",
          url: "#",
          emoji: "📸",
        },
      ],
    },
  ],
};

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavHook hooks={data.hooks} />
        <NavAdvanced advanced={data.advanced} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
