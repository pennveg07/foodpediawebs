import Header from "../components/layouts/Header";
import DynamicLayout from "../components/layouts/DyanmicLayout";

export default function Profile() {
  return (
    <div>
      <Header />
      <DynamicLayout border={false}>
        <div className="my-12 flex flex-col gap-6">
          <p className="text-center text-6xl font-bold font-Merienda">
            Organization
          </p>
          <div className="flex justify-around items-center gap-8 mt-8">
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-full overflow-hidden  w-72 h-72">
                <img
                  src="/stleyven.jpg"
                  alt="Profile 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-3xl font-semibold">Stleyven</p>
              <p className="text-lg text-neutral-400">IT Specialist</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="rounded-full overflow-hidden  w-72 h-72">
                <img
                  src="/kent.jpg"
                  alt="Profile 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-3xl font-semibold">Kent</p>
              <p className="text-lg text-neutral-400">Community Manager</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="rounded-full overflow-hidden  w-72 h-72">
                <img
                  src="/wira.jpg"
                  alt="Profile 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-3xl font-semibold">Wira</p>
              <p className="text-lg text-neutral-400">Content Manager</p>
            </div>
          </div>
        </div>
      </DynamicLayout>

      <DynamicLayout border={false}>
        <div className="flex my-12">
          <div className="flex items-center w-full px-10">
            <div className="flex flex-col gap-4">
              <p className="text-center text-6xl font-bold font-Merienda">
                Visi
              </p>
              <p>
                To become the most trusted and globally recognized culinary
                platform, inspiring people to explore the world of food through
                the best recommendations, creating satisfying culinary
                experiences, and supporting the food industry at every step. We
                aim to be an essential part of everyone's journey to discover,
                enjoy, and share the culinary wonders from around the world.
              </p>
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://nksolutionsllc.com/wp-content/uploads/2022/05/blocks-image-60.jpg"
              alt=""
            />
          </div>
        </div>
      </DynamicLayout>

      <DynamicLayout border={false}>
        <div className="flex my-12">
          <div className="w-full">
            <img
              src="https://cdn.prod.website-files.com/65830f20095c31525532a93d/65830f20095c31525532acc8_64110b25c7833b8b55d04564_How%2520To%2520Lead%2520An%2520Effective%2520Business%2520Discussion.jpeg"
              alt=""
            />
          </div>
          <div className="flex items-center w-full">
            <div className="flex flex-col gap-4 px-10">
              <p className="text-center text-6xl font-bold font-Merienda">
                Misi
              </p>
              <p>
                Food Pedia exists to connect food enthusiasts with the best
                culinary options that cater to every taste and need. We are
                committed to providing detailed, honest, and accessible
                information, so everyone can find the right food at any time.
                Additionally, we support the growth of the culinary business by
                promoting creativity and uniqueness, while building an active
                community that celebrates the love for food and shares
                experiences with the world.
              </p>
            </div>
          </div>
        </div>
      </DynamicLayout>
    </div>
  );
}
