import { ReactNode } from "react";

export interface PagePros {
  params: {
    [key: string] : string;
  };
}

export interface ArchiveLayoutProps {
  archive: ReactNode;
  latest: ReactNode;
}

export interface NewsType {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

export interface NavLinkProps {
  href: string;
}
