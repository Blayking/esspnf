interface IRoute {
  path: string;
  exact?: boolean;
  Component: () => React.ReactElement;
}

export type { IRoute };
