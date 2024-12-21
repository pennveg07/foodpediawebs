import Header from "../components/layouts/Header";
import DynamicLayout from "../components/layouts/DyanmicLayout";

export default function Aboutus() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="items-center flex justify-center">
        <DynamicLayout border={false}>
          <div className="h-auto flex flex-col gap-14 mt-32">
            <div className="text-center text-6xl font-bold flex justify-center">
              <p className="border-b pb-4 border-[#673DE6] font-Merienda">
                About Us
              </p>
            </div>
            <div className="text-lg flex flex-col gap-5 font-semibold">
              <p>
                Food Pedia is here as a platform to inspire food enthusiasts in
                discovering the best culinary recommendations from a wide
                variety of dishes. From traditional cuisines to international
                delicacies, we provide reviews and guides to help you find the
                perfect taste experience.
              </p>
              <p>
                Focusing on quality and diversity, we collaborate with trusted
                restaurants and cafes to deliver detailed information about
                menus, flavors, and dining atmospheres. Food Pedia is your best
                companion in exploring the culinary world!
              </p>
              <p>
                Enjoy an unforgettable culinary journey with Food Pedia, because
                we believe every dish has a story worth savoring.
              </p>
            </div>
          </div>
        </DynamicLayout>
      </div>
    </div>
  );
}
