export const Category = [
  {
    name: "COMPUTE",
    title: "COMPUTE",
    id: "d4579c3a-92c1-4a37-9f11-207f5eeb720e",
  },
  {
    name: "NETWORK",
    title: "NETWORK",
    id: "3e00b1b5-6221-4a39-b9fb-69a76dd1e38e",
  },
  {
    name: "STORAGE",
    title: "STORAGE",
    id: "72c8982a-eaaa-41c6-9f4a-61ac317fd441",
  },
  {
    name: "BACKUP",
    title: "BACKUP",
    id: "0b4fbc58-69cb-4484-81a0-d2f18e9f2f46",
  },
  {
    name: "SECURITY",
    title: "SECURITY",
    id: "196c9803-b2e0-4c2d-9a5b-6ffb098e5c8d",
  },
  {
    name: "STORAGE",
    title: "STORAGE",
    id: "858a6f67-b7b4-4b9b-9185-4dc3f542e8f0",
  },
  {
    name: "DATABASE",
    title: "DATABASE",
    id: "d20a7550-b84d-401e-9b72-0c826061d70b",
  },
];

export type CategoryType = {
  name: string;
  title: string;
  id: string;
};

export type OptionType = {
  value: string;
  label: string;
};

export interface GroupedOption {
  readonly label: string;
  readonly options: readonly OptionType[];
}
