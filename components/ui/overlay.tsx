"use client";

interface Props {
  opacity?: number;
}

function Overlay({ opacity = 25 }: Props) {
  return <div className={`fixed inset-0 bg-black bg-opacity-${opacity}`} />;
}

export default Overlay;
