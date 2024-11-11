// types.ts
export interface NavItem {
    label: string;
  }
  
  export interface NavBarProps {
    items: NavItem[];
    activeItem: string;
    onItemSelect: (label: string) => void;
  }
  