import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import DynamicLayout from "./DyanmicLayout";

export default function Footer() {
  return (
    <div className="bg-blue-900 min-h-48 py-8" id="footer">
      <DynamicLayout border={false}>
        <div className="flex flex-col text-white mb-14">
          <div className="flex md:flex-row flex-col md:gap-0 gap-8">
            <p className="lg:w-8/12 md:w-9/12 xl:text-3xl lg:text-2xl text-xl gap-8">
              <div className="mb-4">Food Pedia</div>
              <div className="lg:text-base md:text-sm text-xs">
                <p>
                  Food Pedia is here as a platform to inspire food enthusiasts
                  in discovering the best culinary recommendations from a wide
                  variety of dishes. From traditional cuisines to international
                  delicacies, we provide reviews and guides to help you find the
                  perfect taste experience. Focusing on quality and diversity,
                  we collaborate with trusted restaurants and cafes to deliver
                  detailed information about menus, flavors, and dining
                  atmospheres. Food Pedia is your best companion in exploring
                  the culinary world! Enjoy an unforgettable culinary journey
                  with Food Pedia, because we believe every dish has a story
                  worth savoring.
                </p>
              </div>
            </p>
            <div className="flex xl:gap-20 lg:gap-12 gap-4 xl:w-4/12 lg:w-3/12 w-full justify-between lg:justify-normal ">
              <div className="gap-4 flex flex-col w-8/12 "></div>
              <div className="gap-4 flex flex-col w-4/12">
                <p className="font-Merienda lg:text-xl md:text-lg text-base md:h-auto h-10">
                  SOCIAL
                </p>
                <div className="flex flex-col gap-3">
                  <a href="https://www.instagram.com/" target="_blank">
                    <div className="flex items-center gap-3 hover:text-[#673DE6]">
                      <CiInstagram className="lg:text-2xl text-xl" />
                      <span className="lg:text-base md:text-sm text-xs">
                        Instagram
                      </span>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank">
                    <div className="flex items-center gap-3 hover:text-[#673DE6]">
                      <CiFacebook className="lg:text-2xl text-xl" />
                      <span className="lg:text-base md:text-sm text-xs">
                        Facebook
                      </span>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank">
                    <div className="flex items-center gap-3 hover:text-[#673DE6]">
                      <FaGithub className="lg:text-2xl text-xl" />
                      <span className="lg:text-base md:text-sm text-xs">
                        Github
                      </span>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank">
                    <div className="flex items-center gap-3 hover:text-[#673DE6]">
                      <CiLinkedin className="lg:text-2xl text-xl" />
                      <span className="lg:text-base md:text-sm text-xs">
                        Linkedin
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DynamicLayout>
    </div>
  );
}
