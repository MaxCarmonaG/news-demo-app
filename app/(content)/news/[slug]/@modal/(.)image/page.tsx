import { FC } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PagePros } from "@/types";
import { getNewsItem } from "@/lib";
import ModalBackdrop from "@/components/ModalBackdrop";

const InterceptedImagePage: FC<PagePros> = ({ params }) => {
  const newsItemSlug = params.slug;
  const newsItem = getNewsItem(newsItemSlug);
  
  if (!newsItem) notFound();

  const { image, title } = newsItem;

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image src={`/images/news/${image}`} alt={title} fill />
        </div>
      </dialog>
    </>
)};

export default InterceptedImagePage;
