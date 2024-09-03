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
  Pen,
  Plus,
  Settings,
  Shield,
  User,
} from "lucide-react";


export const NavbarDropdownLinks = (
  t: (ar0: keyof (typeof translations)[Language]) => any,
  size: number
): TNavbarDropdownLinks[] => [
  {
    name: "Home",
    path: "/",
    icon: <Home size={size} />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <User size={size} />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings size={size} />,
  },
  {
    name: "Posts",
    path: "/posts",
    icon: <Notebook size={size} />,
  },
  {
    name: "Create Post",
    path: "/create-post",
    icon: <Plus size={size} />,
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
