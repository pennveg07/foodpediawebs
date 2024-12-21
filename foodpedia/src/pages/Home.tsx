import Header from "../components/layouts/Header";
import DynamicLayout from "../components/layouts/DyanmicLayout";
import MenuCard from "../components/cards/RecommendationCard";
import HomeTrust from "../components/cards/HomeTrust";
import { MdRoomService } from "react-icons/md";
import { GiCampCookingPot, GiSushis } from "react-icons/gi";
import Footer from "../components/layouts/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Header />
      <DynamicLayout border={false}>
        <div className="py-8 flex-col-reverse md:flex-row flex items-center mt-12 ">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <span className="font-bold border-b-2 w-fit py-4 xl:text-7xl lg:text-6xl text-5xl border-[#673DE6]">
              Food Pedia
            </span>
            <p className="md:w-3/5 w-4/5 font-Merienda text-custom-orange xl:text-4xl lg:text-3xl md:text-2xl text-lg ">
              A PASSION OF FOOD FROM EVERY INDONESIA RESTAURANT FOR YOU
            </p>
            <p className="xl:text-lg lg:text-sm text-xs ">
              Food Pedia is here as a platform to inspire food enthusiasts in
              discovering the best culinary recommendations from a wide variety
              of dishes. From traditional cuisines to international delicacies,
              we provide reviews and guides to help you find the perfect taste
              experience.
            </p>
            <Link
              to={"/menu"}
              className="text-white relative w-fit bg-[#673DE6] before:md:top-1 before:md:left-1 before:lg:top-2 before:lg:left-2 before:top-2 before:left-2 before:w-full before:h-full before:absolute before:border before:-z-50 before:border-[#673DE6] lg:px-8 lg:py-2 md:px-6 md:py-1 px-6 py-2"
            >
              Order Now
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={"/ramen.png"}
              alt=""
              className="object-contain xl:w-8/12 xl:h-8/12 md:w-9/12 md:h-9/12 w-5/12 h-5/12"
            />
          </div>
        </div>
      </DynamicLayout>

      <DynamicLayout border={false}>
        <div className="mb-12 ">
          <p className="flex justify-center mt-12 mb-24 font-Merienda lg:text-5xl text-4xl">
            Best Taste
          </p>
          <div className="w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center w-11/12 mx-auto">
              <MenuCard title={"Sushi"} background={"bg-sushi-menu"}>
                Sushi is a beloved Japanese dish that features perfectly
                seasoned rice topped with fresh fish, seafood, or vegetables.
                It’s often paired with wasabi and soy sauce, creating a burst of
                flavor that sushi lovers can’t resist. Every bite offers a
                perfect harmony of textures and tastes, from the softness of the
                rice to the delicacy of the fish, making sushi a timeless
                choice.
              </MenuCard>
              <MenuCard title={"Steak"} background={"bg-steak-menu"}>
                Steak is a luxurious dish that delights the senses with its
                tender texture and rich, savory flavor. Grilled to perfection,
                steak can be prepared in various doneness levels, from rare to
                well-done, and is often complemented with a variety of sides
                like vegetables and potatoes. Whether served with sauces or
                enjoyed on its own, steak is a premium choice that elevates any
                meal.
              </MenuCard>
              <MenuCard title={"Soto"} background={"bg-soto-menu"}>
                Soto is a comforting Indonesian dish that warms both the body
                and soul. A flavorful broth is filled with tender meats such as
                chicken, beef, or buffalo, along with aromatic spices and fresh
                toppings like bean sprouts, eggs, and lime. The combination of
                savory and tangy flavors makes soto a beloved dish that
                perfectly captures the essence of Indonesian cuisine.
              </MenuCard>
              <MenuCard title={"Sake"} background={"bg-sake-menu"}>
                Sake is a traditional Japanese beverage made from fermented
                rice, known for its smooth and aromatic flavor. It can be served
                either warm or cold, depending on the occasion, and pairs
                beautifully with various Japanese dishes. Sake is not just a
                drink, but a cultural experience that adds an elegant touch to
                any meal, making it a perfect complement to the rich flavors of
                Japanese cuisine.
              </MenuCard>
            </div>
          </div>
        </div>
      </DynamicLayout>

      <div className="flex justify-center items-center bg-cover bg-center md:bg-fixed bg-no-repeat bg-chef relative before:bg-gradient-to-l before:from-transparent before:to-black before:from-40% before:to-60% before:w-full before:absolute before:h-full before:-z-10 -z-10">
        <div className="flex w-full xl:py-72 lg:py-60 md:py-52 py-16">
          <div className="md:w-[40%] w-full text-white flex justify-center ">
            <div className="gap-4 text-center flex flex-col">
              <p className="font-Merienda text-custom-orange xl:text-5xl lg:text-4xl md:text-3xl text-xl text-[#673DE6]">
                BEST OF TASTE
              </p>
              <p className="lg:text-base text-xs">
                Chosen from the best restaurants and top chefs across Indonesia
              </p>
            </div>
          </div>
          <div className="w-[60%] md:inline-block hidden"></div>
        </div>
      </div>

      <DynamicLayout border={false}>
        <div className="mb-16 my-20 flex flex-col md:gap-28 gap-16">
          <p className="flex justify-center font-Merienda lg:text-5xl md:text-4xl text-3xl">
            REASON TO TRUST OUR PLATFORM
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-14 gap-12">
            <HomeTrust Icon={GiSushis} title={"Fresh ingredients"}>
              We prioritize using only the freshest ingredients in every dish.
              From farm-to-table produce to carefully selected meats and
              seafood, our commitment to quality ensures that each meal is
              prepared with the finest, most flavorful ingredients. This
              dedication to freshness guarantees that every bite you take is as
              delicious and nutritious as possible.
            </HomeTrust>
            <HomeTrust Icon={GiCampCookingPot} title={"Best Restaurant"}>
              We partner with the best restaurants that are renowned for their
              culinary expertise and commitment to excellence. These
              establishments not only provide a memorable dining experience but
              also focus on authenticity and innovation in their menus. When you
              choose our platform, you can be confident that you're enjoying
              dishes crafted by top-tier chefs in the industry.
            </HomeTrust>
            <HomeTrust Icon={MdRoomService} title={"Best Services"}>
              Our platform offers unparalleled service to ensure your dining
              experience is seamless and enjoyable. From easy ordering to prompt
              delivery and attentive customer support, we are dedicated to
              providing exceptional service every step of the way. Your
              satisfaction is our priority, and we go the extra mile to ensure
              you have a hassle-free experience every time.
            </HomeTrust>
          </div>
        </div>
      </DynamicLayout>

      <Footer />
    </div>
  );
}
