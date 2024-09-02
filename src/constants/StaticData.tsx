import {
  TNavbarDropdownLinks,
  TProfileDataCards,
  TProfileSidebarLinks,
  TthemePreferences,
} from "./Types";
import { Language, translations } from "./translation";
import {
  Home,
  IdCard,
  Notebook,
  NotebookPenIcon,
  Plus,
  Settings,
  Shield,
  User,
} from "lucide-react";

export const ProfileSideLinks = (
  t: (ar0: keyof (typeof translations)[Language]) => any
): TProfileSidebarLinks[] => [
  {
    name: "Profile",
    path: "/profile",
    icon: <User size={30} />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings size={30} />,
  },
  {
    name: "Posts",
    path: "/posts",
    icon: <Notebook size={30} />,
  },
  {
    name: "Create A Post",
    path: "/create-post",
    icon: <NotebookPenIcon size={30} />,
  },
];

export const NavbarDropdownLinks = (
  t: (ar0: keyof (typeof translations)[Language]) => any
): TNavbarDropdownLinks[] => [
  {
    name: "Home",
    path: "/",
    icon: <Home size={15} />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <User size={15} />,
  },
  {
    name: "Create Post",
    path: "/create-post",
    icon: <Plus size={15} />,
  },
];

export const ProfileDataCards = <T,>(
  t: (ar0: keyof (typeof translations)[Language]) => any,
  data: { user: { email: string; name: string } }
): TProfileDataCards<T> => [
  {
    heading: "Username",
    paragraph: data?.user.name as T,
    icon: <User />,
  },
  {
    heading: "Email",
    paragraph: data?.user.email as T,
    icon: <IdCard />,
  },
  {
    heading: "Account Check",
    paragraph: "No breaches" as T,
    icon: <Shield />,
  },
  {
    heading: "Posts",
    paragraph: 0 as T,
    icon: <Notebook />,
  },
];

export const ThemePreferences = (
  t: (ar0: keyof (typeof translations)[Language]) => any
): TthemePreferences[] => [
  {
    index: 0,
    name: "System Preference",
    setter: "system",
    image: "/assets/icons/system.png",
  },
  {
    index: 1,
    name: "Light",
    setter: "light",
    image: "/assets/icons/light.png",
  },
  {
    index: 2,
    name: "Dark",
    setter: "dark",
    image: "/assets/icons/dark.png",
  },
];
