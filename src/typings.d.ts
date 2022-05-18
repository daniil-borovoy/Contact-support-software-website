interface literatureItem {
  title: string;
  link?: string;
}

type article = literatureItem;

declare module "literature_list.json" {
  const value: literatureItem[];
  export default value;
}

declare module "articles_and_monographs_list.json" {
  const value: article[];
  export default value;
}

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
