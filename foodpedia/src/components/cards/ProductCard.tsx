interface ProductAttribute {
  background: string;
  title: string;
  price: number;
  gofood: string;
  children: React.ReactNode;
}

export default function ProductCard({
  background,
  title,
  price,
  gofood,
  children,
}: ProductAttribute) {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-64 w-auto bg-black flex items-center">
        <img
          src={background}
          alt=""
          className="object-cover align-middle w-full h-full"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg">{title}</p>
        <p>IDR. {price}</p>
      </div>
      <p className="flex-1">{children}</p>
      <div className="bg-custom-orange w-fit ">
        <a
          href={gofood}
          target="_blank"
          className="py-2 px-8 text-white bg-[#673DE6]"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}
