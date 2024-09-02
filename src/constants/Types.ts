export type TProfileLayout = {
    children: React.ReactNode;
    route: string;
}

export type TNavbarDropdownLinks = {
    path: string;
    icon: React.ReactNode;
    name: string;
}

export type TthemePreferences = {
    setter: string;
    image: string;
    name: string;
    index: number
}

export type TProfileSidebarLinks = {
    name: string;
    path: string;
    icon: React.ReactNode
}

export type TProfileDataCard<T> = {
    heading: string;
    paragraph: T;
    icon: React.ReactNode;
};

export type TProfileDataCards<T> = TProfileDataCard<T>[];