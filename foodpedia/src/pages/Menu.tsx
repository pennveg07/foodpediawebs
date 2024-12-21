import { useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import DynamicLayout from "../components/layouts/DyanmicLayout";
import ProductCard from "../components/cards/ProductCard";
import { searchFood } from "../api/food";

interface foods {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  gofood: string;
}

export default function Menu() {
  const [datas, setDatas] = useState<foods[]>([]);
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    const getData = async () => {
      const data = await searchFood({ food_name: search });
      console.log(data);

      setDatas(data);
    };
    getData();
  }, [search]);

  return (
    <div>
      <Header />
      <div className="bg-sushi-packet bg-cover bg-no-repeat bg-center relative before:w-full before:absolute before:h-full before:z-10 z-20 before:bg-gradient-to-b before:from-black before:to-transparent before:from-5% before:to-70%">
        <div className="p-28 z-50 relative flex justify-center items-center text-white flex-col">
          <div className="w-2/5 text-center flex flex-col gap-8">
            <p className="lg:text-5xl md:text-4xl text-3xl font-Merienda">
              MENU
            </p>
            <p className="lg:text-base md:text-sm text-xs">
              Our menu showcases a carefully selected range of dishes, each
              chosen for its exceptional quality and irresistible flavors. We
              bring you only the best, offering meals that satisfy every craving
              and provide an unforgettable dining experience. With a variety of
              options, you're sure to find something that will delight your
              taste buds.
            </p>
          </div>
        </div>
      </div>

      <DynamicLayout border={false}>
        <div className="my-10">
          <div className="">
            <input
              type="search"
              name=""
              id=""
              className="w-full p-4 px-6 rounded-md border border-neutral-900 outline-none"
              placeholder="Search your favourite food in here"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-12 mb-20">
            <div className="w-11/12">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                {datas.length > 0 ? (
                  datas.map((data) => (
                    <ProductCard
                      background={data.image}
                      title={data.title}
                      price={data.price}
                      gofood={data.gofood}
                    >
                      {data.description}
                    </ProductCard>
                  ))
                ) : (
                  <p>No foods abailable</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </DynamicLayout>
    </div>
  );
}
