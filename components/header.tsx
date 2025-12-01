import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
        <div
          className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between
        "
        >
          <Link href={"/"} className="flex items-center">
            <span className="text-xl">EVENT</span>
          </Link>

          {/* <div className="">Search and location</div> */}

          {/* <div className="">Right Section</div> */}
        </div>
        {/* MOBILE SEARCH AND LOCATION */}
      </nav>

      {/* MODALS */}
    </>
  );
}
