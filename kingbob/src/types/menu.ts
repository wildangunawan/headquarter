import { IconType } from "react-icons";

// Type when menu is external link
type ExternalLink = {
    category?: never;
    dropdown?: never;
    external?: boolean;
    layout?: never;
    path?: never;
    icon?: IconType;
    link: string;
}

// Type when a menu is an actual item or not
type IsMenuItem = {
    category?: never;
    dropdown?: never;
    external?: never;
    layout: string;
    path: string;
    icon?: IconType;
}

type IsNotMenuItem = {
    layout?: never;
    path?: never;
    icon?: never;
}

// Type when a menu is a category or dropdown
type IsCategory = {
    category?: boolean;
    dropdown?: never;
    external?: never;
    items: Menu[];
} & IsNotMenuItem;

type IsDropdown = {
    category?: never;
    dropdown?: boolean;
    external?: never;
    items: Menu[]
} & IsNotMenuItem;

// Required items for all entry
type Name = {
    name: string;
}

// Complete type that allow:
// - category
// - dropdown
// - normal menu item
export type Menu = (Name & IsMenuItem)
    | (Name & IsCategory)
    | (Name & IsDropdown)
    | (Name & ExternalLink);