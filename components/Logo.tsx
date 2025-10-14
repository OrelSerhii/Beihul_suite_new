import Image from "next/image";

export default function Logo({ size = 40 }: { size?: number }) {
  const src = "/brand/logo-bp-gold.png";
  return (
    <Image
      src={src}
      alt="Beygul & Partners — emblem"
      width={size}
      height={size}
      className="w-10 h-10 rounded-full object-cover"
      priority
    />
  );
}
