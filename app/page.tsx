import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      {/* HERO SECTION */}
      <section className="pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* left */}
          <div className="text-center sm:text-left">
            <div className="mb-6">
              <span className="text-gray-500 font-light tracking-wide">
                event<span className="text-purple-400">*</span>
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight">
              Discover &<br />
              create amazing
              <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                events.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-lg font-light">
              Whether you&apos;re hosting or attending, Spott makes every event
              memorable. Join our community today.
            </p>

            <Link href="/explore">
              <Button
                variant={"outline"}
                size={"xl"}
                className={"cursor-pointer"}
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* right */}

          <div className="relative block ">
            <video
              width="100%"
              height="100%"
              loop
              playsInline
              autoPlay
              muted
              className="w-lg h-auto mx-auto"
            >
              <source
                src="https://cdn.lu.ma/landing/phone-dark.mp4"
                type="video/mp4;codecs=hvc1"
              />
              <source
                src="https://cdn.lu.ma/landing/phone-dark.webm"
                type="video/webm"
              />
            </video>
            {/* <Image
                  src="/hero.png"
                  alt="meetup"
                  width={700}
                  height={700}
                  className="w-full h-auto"
                  priority
                /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
