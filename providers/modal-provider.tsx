"use client";

import PreviewModal from "@/components/preview-modal";
import { useMounted } from "@/lib/hooks";

function ModalProvider() {
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
    </>
  );
}

export default ModalProvider;
