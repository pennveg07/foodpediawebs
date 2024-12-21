import { Link } from "react-router-dom";

interface MenuAttribute {
  background: string;
  title: string;
  children: React.ReactNode;
}

export default function MenuCard({
  background,
  title,
  children,
}: MenuAttribute) {
  return (
    <div
      className={
        background +
        " hover:cursor-pointer text-white bg-cover bg-center bg-no-repeat  relative before:bg-gradient-to-l before:from-transparent before:to-black hover:before:from-10% hover:before:to-90% before:from-30% before:to-90% before:w-full before:absolute before:h-full before:z-10 z-20 h-full"
      }
    >
      <div className="flex flex-col xl:w-10/12 lg:w-10/12 md:w-11/12 w-9/12 z-50 relative md:gap-6 gap-2 lg:px-24 lg:py-12 md:px-14 md:py-10 px-10 py-10 ">
        <p className="lg:text-3xl md:text-2xl sm:lg:text-xl hover:text-[#673DE6] w-fit font-Merienda">
          {title}
        </p>
        <p className="xl:text-base lg:text-sm text-xs flex-grow">{children}</p>
        <Link
          to={"/menu"}
          className="w-fit border font-bold hover:border-[#673DE6] hover:bg-[#673DE6] lg:px-8 lg:py-4 lg:text-base text-xs md:px-4 md:py-2 px-4 py-2"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
}
