import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
  return (
    <main className="fill-gray-800 container mx-auto bg-[url('/img/cover.svg')] bg-no-repeat bg-cover bg-center bg-overflow-visible">
      <div className="grid grid-cols-12 gap-4 px-20 py-6">
        <section className="col-span-5 py-4 flex flex-col items-start text-left gap-4 relative">
          <div className="flex flex-row gap-3 sticky top-6">
            {/* <a
              className="block w-12 aspect-square rounded-full overflow-hidden"
              href="/"
            >
              <img src="/img/logo.png" alt="Rayandra Valera" />
            </a> */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-50">
                Rayandra Valera
              </h1>
              <p className="text-gray-600 dark:text-gray-200">
                Product (UI/UX) and Visual Designer based in Indonesia. <br /> I
                craft stunning visuals thoughtfully.
              </p>
            </div>
          </div>
        </section>
        <section className="col-span-7 flex flex-col gap-6">
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/img/humaira.png"
                alt="Image"
                className="absolute inset-0 rounded-md object-cover"
                layout="fill"
              />
            </AspectRatio>
          </div>
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/img/KSN.png"
                alt="Image"
                className="absolute inset-0 rounded-md object-cover"
                layout="fill"
              />
            </AspectRatio>
          </div>
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/img/Patchwork.png"
                alt="Image"
                className="absolute inset-0 rounded-md object-cover"
                layout="fill"
              />
            </AspectRatio>
          </div>
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/img/TBF.png"
                alt="Image"
                className="absolute inset-0 rounded-md object-cover"
                layout="fill"
              />
            </AspectRatio>
          </div>
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/img/farmioweb.png"
                alt="Image"
                className="absolute inset-0 rounded-md object-cover"
                layout="fill"
              />
            </AspectRatio>
          </div>
        </section>
      </div>
    </main>
  );
}
