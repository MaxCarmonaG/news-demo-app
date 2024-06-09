import { FC } from "react";
import Image from "next/image";
import { PagePros } from "@/types";
import { DUMMY_NEWS } from "@/mock-news";
import { notFound } from "next/navigation";

const ImagePage: FC<PagePros> = ({ params }) => {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(({ slug }) => slug === newsItemSlug);
  
  if (!newsItem) notFound();

  const { image, title } = newsItem;

  return (
    <div className="fullscreen-image">
      <Image src={`/images/news/${image}`} alt={title} fill/>
    </div>
)};

export default ImagePage;
