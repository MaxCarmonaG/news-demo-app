'use client';

import { FC } from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { PagePros } from "@/types";
import { DUMMY_NEWS } from "@/mock-news";

const InterceptedImagePage: FC<PagePros> = ({ params }) => {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(({ slug }) => slug === newsItemSlug);
  
  if (!newsItem) notFound();

  const { image, title } = newsItem;

  const router = useRouter();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image src={`/images/news/${image}`} alt={title} fill />
        </div>
      </dialog>
    </>
)};

export default InterceptedImagePage;
