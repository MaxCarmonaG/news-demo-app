import { FC } from "react";
import { ArchiveLayoutProps } from "@/types";

const ArchiveLayout: FC<ArchiveLayoutProps> = ({ archive, latest }) => (
  <div>
    <h1>New Archives</h1>
    <section id="archive-filter">{archive}</section>
    <section id="archive-latest">{latest}</section>
  </div>
);

export default ArchiveLayout;
