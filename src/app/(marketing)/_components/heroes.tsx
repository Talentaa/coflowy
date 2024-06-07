import Image from "next/image";

export const Heros = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            fill={true}
            alt="Documents"
            src="/documents.png"
            className="object-contain dark:hidden"
          />
          <Image
            fill={true}
            alt="Documents"
            src="/documents-dark.png"
            className="object-contain hidden dark:block"
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden md:block ">
          <Image
            fill={true}
            alt="reading"
            src="/reading.png"
            className="object-contain dark:hidden"
          />
          <Image
            fill={true}
            alt="reading"
            src="/reading-dark.png"
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};
