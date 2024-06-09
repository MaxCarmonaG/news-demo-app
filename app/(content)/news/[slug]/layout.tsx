import { FC, PropsWithChildren, ReactNode } from "react";

const NewsDetailLayout: FC<PropsWithChildren<{ modal: ReactNode }>> = ({ children, modal }) => (
  <>
    {modal}
    {children}
  </>
);

export default NewsDetailLayout;
