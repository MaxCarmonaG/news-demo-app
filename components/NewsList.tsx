import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { NewsType } from "@/types";

const NewsList: FC<{ news: NewsType[]}> = ({ news }) => (
  <ul className="news-list">
      {
        news.map(({ id, slug, image, title }) => (
          <li key={id}>
            <Link href={`/news/${slug}`}>
              <Image src={`/images/news/${image}`} alt={title} width={500} height={500}/>
              <span>{title}</span>
            </Link>
          </li>
        ))
      }
    </ul>
);

export default NewsList;
