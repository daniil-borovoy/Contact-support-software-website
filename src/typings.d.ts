interface literatureItem {
  title: string;
  link?: string;
}

declare module "literature_list.json" {
  const value: literatureItem[];
  export default value;
}
