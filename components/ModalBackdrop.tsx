'use client';

import { useRouter } from "next/navigation";
import { FC } from "react";

const ModalBackdrop: FC = () => {
  const router = useRouter();

  return (
    <div className="modal-backdrop" onClick={router.back} />
  );
};

export default ModalBackdrop;
