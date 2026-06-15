import Image from "next/image";

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <Image
      src="/sb-mig-logo.png"
      alt=""
      width={500}
      height={500}
      className={`${className} shrink-0 object-contain`}
      aria-hidden="true"
    />
  );
}
