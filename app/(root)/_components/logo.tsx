import LogoBlack from "@/public/logo/logo-black.svg";
import LogoWhite from "@/public/logo/logo-white.svg";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={LogoBlack}
        height={40}
        width={50}
        quality={95}
        alt="Ethereal notes logo black"
        className="dark:hidden"
      />
      <Image
        src={LogoWhite}
        height={40}
        width={50}
        quality={95}
        alt="Ethereal notes logo light"
        className="hidden dark:block"
      />
    </div>
  );
};
