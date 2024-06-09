import { FC } from "react";
import Image from 'next/image';
import { PagePros } from "@/types";
import { DUMMY_NEWS } from "@/mock-news";
import { notFound } from "next/navigation";
import Link from "next/link";

const NewsDetailPage: FC<PagePros> = ({ params }) => {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(({ slug }) => slug === newsSlug);

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
