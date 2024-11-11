// TabContainer/types.ts
export interface Tab {
    label: string;
  }
  
  export interface TabContainerProps {
    tabs: Tab[];
    onTabSelect: (label: string) => void;
  }
  