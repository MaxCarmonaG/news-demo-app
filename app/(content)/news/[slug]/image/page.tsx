import { FC } from "react";
import Image from "next/image";
import { PagePros } from "@/types";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib";

const ImagePage: FC<PagePros> = ({ params }) => {
  const newsItemSlug = params.slug;
  const newsItem = getNewsItem(newsItemSlug);
  
  if (!newsItem) notFound();

  const { image, title } = newsItem;

  return (
    <div className="fullscreen-image">
      <Image src={`/images/news/${image}`} alt={title} fill/>
    </div>
)};

export default ImagePage;
