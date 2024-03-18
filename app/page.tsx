"use client";
import React from "react";
import user from "../public/user.jpg";
import podcast_title from "../public/logo-horizontal-leadersTalk.png";
import popular_video_1 from "../public/popular_video_1.png";
import popular_video_2 from "../public/popular_video_2.png";
import popular_video_3 from "../public/popular_video_3.png";
import popular_video_4 from "../public/popular_video_4.png";
import { motion } from "framer-motion";
import Spotlight, { SpotlightCard } from "./components/SpotlightCard";
import { Image, User } from "@nextui-org/react";
import { IoStarSharp } from "react-icons/io5";
import user_all_body from "../public/user_all_body.png";

export default function Home() {
  return (
    <main className="flex flex-col overflow-auto">
      <section id="menu" className="flex flex-col w-full h-4/5 ">
        <div className="flex flex-1 flex-col sm:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image src={user.src} alt="user" width={570} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col flex-1 items-center"
          >
            <motion.p
              initial={{ y: 15 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={podcast_title.src}
                alt="Logo horizontal"
                height={200}
                width={300}
              />
            </motion.p>
            <div className="m-8">
              <motion.p
                initial={{ y: 15 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-gray-600 text-xs sm:text-lg select-none leading-relaxed mb-4 font-semibold hover:text-white transition duration-300 ease-in-out"
              >
                LeadersTalkPodcast, interviewing leaders amongst every industry.
                Personal Brand Strategist.
              </motion.p>
              <motion.p
                initial={{ y: 15 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-gray-600 text-xs sm:text-lg select-none leading-relaxed mb-4 font-semibold hover:text-white transition duration-300 ease-in-out"
              >
                The Leaders Talk Podcast is your gateway to a world of
                inspiration, unlocking the secrets of everyday success. We aim
                to bring you up close and personal with individuals who have
                turned their dreams into reality, delving into their journeys,
                thought processes, and unique insights. We believe that everyone
                has the potential to achieve greatness and that the path to
                success begins with a change in mindset.
              </motion.p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-row gap-3 w-full overflow-y-auto scrollbar-hide px-10">
          <Image
            isZoomed
            src={popular_video_1.src}
            alt="popular_video_1"
            className="min-w-64 h-36 rounded-md cursor-pointer"
          />
          <Image
            isZoomed
            src={popular_video_2.src}
            alt="popular_video_2"
            className="min-w-64 h-36 rounded-md cursor-pointer"
          />
          <Image
            isZoomed
            src={popular_video_3.src}
            alt="popular_video_3"
            className="min-w-64 h-36 rounded-md cursor-pointer"
          />
          <Image
            isZoomed
            src={popular_video_4.src}
            alt="popular_video_4"
            className="min-w-64 h-36 rounded-md cursor-pointer"
          />
          <Image
            isZoomed
            src={popular_video_2.src}
            alt="popular_video_2"
            className="min-w-64 h-36 rounded-md cursor-pointer"
          />
          <Image
            isZoomed
            src={popular_video_3.src}
            alt="popular_video_3"
            className="min-w-64 h-36 rounded-md cursor-pointer"
          />
          <Image
            isZoomed
            src={popular_video_4.src}
            alt="popular_video_4"
            className="min-w-64 h-36 rounded-md cursor-pointer"
          />
        </div>
      </section>
      <section id="about" className="flex flex-col sm:flex-row w-full h-screen">
        <div className="flex flex-1 flex-col justify-center items-center p-16">
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-gray-600 text-lg select-none leading-relaxed font-semibold hover:text-white transition duration-300 ease-in-out"
          >
            About
          </motion.p>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-gray-600 text-lg select-none leading-relaxed font-semibold hover:text-white transition duration-300 ease-in-out"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            perferendis, nostrum quo neque quod pariatur qui ipsa cumque
            doloremque beatae dolor. Beatae, ipsam maxime laborum fugiat omnis
            delectus? Soluta, debitis?
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-1 justify-center"
        >
          <Image src={user_all_body.src} alt="user" width={300} />
        </motion.div>
      </section>
      <section
        id="services"
        className="flex flex-col w-full h-screen justify-center items-center mt-20 sm:mt-0"
      >
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-gray-600 text-lg select-none leading-relaxed mb-4 font-semibold hover:text-white transition duration-300 ease-in-out"
        >
          Services
        </motion.p>
        <Spotlight className="w-full mx-auto grid gap-6 lg:grid-cols-2 items-start lg:max-w-none group p-10">
          <SpotlightCard>
            <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
              </div>
              <div className="flex flex-col h-full items-center text-center">
                {/* Image */}
                <div className="relative inline-flex">
                  <div
                    className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  ></div>
                  <Image
                    className="inline-flex"
                    src={podcast_title.src}
                    width={200}
                    height={200}
                    alt="Card 01"
                  />
                </div>
                <div className="grow mb-5">
                  <h2 className="text-xl text-slate-200 font-bold mb-1">
                    Private Consulting
                  </h2>
                  <p className="text-sm text-slate-500">Personal branding</p>
                </div>
                <a
                  className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                  href="#0"
                >
                  <svg
                    className="fill-slate-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                  >
                    <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                  </svg>
                  <span>Connect</span>
                </a>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard>
            <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              <div className="flex flex-col h-full items-center justify-center text-center">
                <div className="mb-5">
                  <h2 className="text-xl text-slate-200 font-bold mb-1">
                    Skool
                  </h2>
                  <p className="text-sm text-slate-500">
                    Personal content ebook
                  </p>
                </div>
                <a
                  className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                  href="#0"
                >
                  <svg
                    className="fill-slate-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                  >
                    <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                  </svg>
                  <span>Connect</span>
                </a>
              </div>
            </div>
          </SpotlightCard>
        </Spotlight>
      </section>
      <section
        id="testimonials"
        className="flex flex-col w-full h-screen justify-center"
      >
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-gray-600 text-center text-lg select-none leading-relaxed mb-4 font-semibold hover:text-white transition duration-300 ease-in-out"
        >
          Testimonials
        </motion.p>
        <Spotlight className="w-full mx-auto grid gap-6 lg:grid-cols-2 items-start lg:max-w-none group p-10">
          <SpotlightCard>
            <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              <div className="flex flex-col  ">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sed distinctio beatae dignissimos quae, nam possimus omnis
                    quaerat iure repellat alias! Aperiam inventore nobis
                    architecto tenetur optio sequi minus odio provident.
                  </p>
                </div>
                <div className="flex flex-row w-full justify-between mt-5">
                  <User
                    name="Jane Doe"
                    description="Product Designer"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                  />
                  <div className="flex flex-row px-5 bg-slate-700 items-center rounded-full bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 border border-gray-600">
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard>
            <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              <div className="flex flex-col  ">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sed distinctio beatae dignissimos quae, nam possimus omnis
                    quaerat iure repellat alias! Aperiam inventore nobis
                    architecto tenetur optio sequi minus odio provident.
                  </p>
                </div>
                <div className="flex flex-row w-full justify-between mt-5">
                  <User
                    name="Jane Doe"
                    description="Product Designer"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                  />
                  <div className="flex flex-row px-5 bg-slate-700 items-center rounded-full bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 border border-gray-600">
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard>
            <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              <div className="flex flex-col  ">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sed distinctio beatae dignissimos quae, nam possimus omnis
                    quaerat iure repellat alias! Aperiam inventore nobis
                    architecto tenetur optio sequi minus odio provident.
                  </p>
                </div>
                <div className="flex flex-row w-full justify-between mt-5">
                  <User
                    name="Jane Doe"
                    description="Product Designer"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                  />
                  <div className="flex flex-row px-5 bg-slate-700 items-center rounded-full bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 border border-gray-600">
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard>
            <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              <div className="flex flex-col  ">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sed distinctio beatae dignissimos quae, nam possimus omnis
                    quaerat iure repellat alias! Aperiam inventore nobis
                    architecto tenetur optio sequi minus odio provident.
                  </p>
                </div>
                <div className="flex flex-row w-full justify-between mt-5">
                  <User
                    name="Jane Doe"
                    description="Product Designer"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                  />
                  <div className="flex flex-row px-5 bg-slate-700 items-center rounded-full bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 border border-gray-600">
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </Spotlight>
      </section>
    </main>
  );
}
