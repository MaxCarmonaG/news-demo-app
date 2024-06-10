import { FC } from "react";
import Image from 'next/image';
import { PagePros } from "@/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/lib";

const NewsDetailPage: FC<PagePros> = ({ params }) => {
  const newsSlug = params.slug;
  const newsItem = getNewsItem(newsSlug);

  if (!newsItem) notFound();

  const { image, title, date, content, slug } = newsItem;

  return (
  <article className="news-article">
    <header>
      <Link href={`/news/${slug}/image`}>
        <Image src={`/images/news/${image}`} alt={title} width={112} height={112} />
      </Link>
      <h1>{title}</h1>
      <time dateTime={date}>{date}</time>
    </header>
    <p>{content}</p>
  </article>
)};

export default NewsDetailPage;
