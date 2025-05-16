"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import "./flashcut.css";
import { TiTick } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import Review from "../_components/Review";
import FAQ from "../_components/FAQ";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const page = () => {
  const [Reviews, setReviews] = useState([
    {
      dp: "/FlashCutEdits/girl1.jpg",
      name: "Sarah M",
      profession: "YouTube Coach, California",
      review: `"I hired Flashcut Edits for my YouTube Shorts and within 2 weeks, I saw a massive jump in engagement! They understand how to make content pop. Definitely recommend them for creators who want professional edits without the hassle."`,
    },
    {
      dp: "/FlashCutEdits/boy1.jpeg",
      name: "Jason B",
      profession: "Startup Founder, New York",
      review: `"Our promotional videos and IG reels were handled by Flashcut Edits and they nailed it! The storytelling, transitions, and graphics were top-tier. It saved my team tons of time and looked super clean."`,
    },
    {
      dp: "/FlashCutEdits/girl2.jpg",
      name: "Ananya R",
      profession: "Content Creator, Mumbai",
      review: `"Flashcut Edits has been a game-changer for me. From reels to long-form content, everything feels more polished and professional. Plus, they always deliver before the deadline!"`,
    },
    {
      dp: "/FlashCutEdits/boy2.jpg",
      name: "Rohit S",
      profession: "Tech YouTuber, Delhi",
      review: `"Many agencies tried, but Flashcut Edits truly took my video quality to the next level. Their motion graphics and thumbnails are complete game-changers!"`,
      review1: `"Tried many agencies, but Flashcut Edits actually "`,
    },
    {
      dp: "/FlashCutEdits/girl3.jpg",
      name: "Nikita B",
      profession: "Artist, Pune",
      review: `"Flashcut Edits. did an amazing job editing my promo video. The transitions and effects looked professional, and they totally captured the vibe I was going for. Super fast turnaround too. Highly recommend!"`,
    },
    {
      dp: "/FlashCutEdits/boy3.jpg",
      name: "Virat K",
      profession: "Social Media Manager, Haryana",
      review: `"Flashcut Edits. nailed our social media graphics! Clean design, great use of color, and matched our brand perfectly. Quick revisions and smooth communication made the process easy."`,
    },
  ]);

  const BookCallRef = useRef(null);
  const StickyBookCallRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      BookCallRef.current,
      {
        x: -20,
      },
      {
        x: 20,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2",
        yoyoEase: "power2",
      }
    );
    ScrollTrigger.create({
      trigger:'.page_2',
      start:'top 20%',
      endTrigger:'.faqs',
      end:'top -100%',
      markers:true,
      onEnter(){
        gsap.set(StickyBookCallRef.current,{
          display:'flex'
        })
      },
      onLeaveBack(){
        gsap.set(StickyBookCallRef.current,{
          display:'none'
        })
      }
    })
  });

  return (
    <main className="w-screen overflow-x-hidden relative text-white bg-[#111]">
      <div className="bg fixed z-10 top-1/2 left-1/2 -translate-1/2 w-screen h-screen">
        <div className="bg-in w-[100vw] h-[100vh]"></div>
      </div>
      <nav className="z-60  nav bg-[#252639] text-3xl absolute top-6 left-1/2 -translate-x-1/2 w-[90%] h-12 border border-white p-2 flex justify-center items-center rounded-sm">
        <h1 className="text-[.9rem] text-center sora-bold tracking-wide text-wrap text-[#FF6D01]">
          Transform Your Videos into Scroll-Stopping Content
        </h1>
      </nav>
      <Link
          ref={StickyBookCallRef}
          target="_blank"
          href="https://calendly.com/jaitanishq222/video-editing-consultation"
          className="fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center z-[70] w-[100vw] h-[80px] bg-[#232323]"
        >
          <div className="home-cta mx-4 cursor-pointer flex justify-center items-center  w-[90vw] h-[70px] bg-[#FF6D01] rounded-full">
            <h1 className="text-[1.6rem] sora-bold ">Book A Call Now</h1>
          </div>
        </Link>
      <section className="z-50 relative page_1  pt-16 w-screen min-h-screen flex flex-col items-center justify-start">
        <div className="home-content flex w-full flex-col gap-14 h-[auto] mt-10">
          <div className="headings flex-2">
            <div className="heading">
              <h1 className="text-4xl sora-bold capitalize px-2 text-center text-white">
                <span className="text-[#ff6647] sora-bold">Professional</span>{" "}
                video editing services tailored for{" "}
                <span className="text-[#ff6647] sora-bold">
                  content creators,
                </span>{" "}
                <span className="text-[#ff6647] sora-bold">coaches,</span> and{" "}
                <span className="text-[#ff6647] sora-bold">business</span>
              </h1>
              <h1 className="text-xl text-center pt-5">
                <span className="sora-medium">Boost Your Results with </span>
                Flashcut Edits
              </h1>
            </div>
          </div>
          <div className="video w-full h-[200px] bg-amber-700 m-1"></div>
        </div>
        <Link
          ref={BookCallRef}
          target="_blank"
          href="https://calendly.com/jaitanishq222/video-editing-consultation"
        >
          <div className="home-cta mx-4 cursor-pointer flex justify-center items-center mt-6 w-[90vw] h-[70px] bg-[#FF6D01] rounded-full">
            <h1 className="text-[1.6rem] sora-bold ">Book A Call Now</h1>
          </div>
        </Link>
        <div className="wa-cta mx-4 cursor-pointer leading-none flex flex-col justify-center items-center mt-6 w-[90%] h-[70px] bg-green-400 rounded-full">
          <a
            href="https://wa.me/9867009961"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center w-full "
          >
            <h1 className="text-[1.8rem] sora-bold ">Chat On Whatsapp</h1>
            <p>[+91 9867009961]</p>
          </a>
        </div>
      </section>
      <section className="z-50 relative page_2 pt-4 w-screen h-[auto]">
        <div className="offers-con w-full bg-[#313335] py-6">
          <h1 className="w-full text-center text-4xl sora-bold text-[#E6A966]">
            Who Is This For
          </h1>
          <div className="offers mt-4 flex justify-between items-center px-6">
            <div className="offer w-full flex flex-col items-start justify-start gap-5">
              <h1 className=" bg-[#4C4D4D] p-2 w-full  text-[1.1rem] gap-4 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">Business owners</p>
              </h1>
              <h1 className=" bg-[#4C4D4D] p-2 w-full  text-[1.1rem] gap-4 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">
                  Content Creators / YouTubers
                </p>
              </h1>
              <h1 className=" bg-[#4C4D4D] p-2 w-full  text-[1.1rem] gap-4 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">
                  Coaches & Online Educators
                </p>
              </h1>
              <h1 className=" bg-[#4C4D4D] p-2 w-full  text-[1.1rem] gap-4 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">
                  E-commerce Brands / Dropshipping Stores
                </p>
              </h1>
              <h1 className=" bg-[#4C4D4D] p-2 w-full  text-[1.1rem] gap-4 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">Real Estate Agents</p>
              </h1>
              <h1 className=" bg-[#4C4D4D] p-2 w-full  text-[1.1rem] gap-4 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">
                  Agencies (Marketing, Branding, Influencer)
                </p>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="z-50 relative  services w-full h-[auto] py-2">
        <h1 className="w-full text-center text-[#FF6D01] text-6xl my-4 sora-bold">
          Our Services
        </h1>
        <div
          data-open="false"
          className="services-con w-full gap-4 flex flex-wrap px-2 my-5"
        >
          <div className="w-[100%] cursor-pointer p-3 flex flex-col justify-center items-center  h-auto border-white  border bg-[#505355] rounded-sm">
            <div className="w-full h-fit flex items-center justify-center gap-4">
              <div className="icon h-[50px] aspect-square relative text-sm">
                <Image
                  fill
                  src="/FlashCutEdits/video-editing.svg"
                  alt="editing"
                />
              </div>
              <h1 className="text-[1.4rem] text-[#E6A966] sora-bold">
                Video Editing
              </h1>
            </div>
            <div className="video-editing-dropdown mt-2 justify-start items-start w-full h-fit grid sm:place-items-center grid-cols-1 sm:grid-cols-2  gap-1">
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">Short-form content</p>
              </div>
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">Long-form videos</p>
              </div>
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">Documentary editing</p>
              </div>
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">
                  Educational & tech content
                </p>
              </div>
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">
                  Ads & promotional videos
                </p>
              </div>
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">
                  Corporate & business edits
                </p>
              </div>
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">
                  Engaging storytelling edits
                </p>
              </div>
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">Cinematic video edits</p>
              </div>
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">
                  High-level motion graphics
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-open="false"
          className="services-con transition-all duration-150 w-full gap-4 flex flex-wrap px-2 my-5"
        >
          <div className="w-[100%] cursor-pointer p-3 flex flex-col justify-center items-center  h-auto border-white  border bg-[#505355] rounded-sm">
            <div className="w-full h-fit flex items-center justify-center gap-4">
              <div className="icon h-[50px] aspect-square relative text-sm">
                <Image
                  fill
                  src="/FlashCutEdits/graphic-designing.svg"
                  alt="editing"
                />
              </div>
              <h1 className="text-[1.4rem] text-[#E6A966] sora-bold">
                Graphic Designing
              </h1>
            </div>
            <div className="video-editing-dropdown  mt-2 justify-start items-start w-full h-fit grid grid-cols-1 sm:grid-cols-2  gap-1 sm:place-items-center">
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">YouTube thumbnails</p>
              </div>
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">
                  Instagram cover images
                </p>
              </div>
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">Channel banners</p>
              </div>
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">
                  YouTube channel covers
                </p>
              </div>
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">Logo designing</p>
              </div>
              <div className="px-2 w-fit sm:w-[400px]  text-[1.1rem] gap-2 flex justify-start items-center rounded-sm">
                <div className="icon w-[30px] h-[30px] aspect-square flex justify-center items-center text-white rounded-full">
                  <p className="w-full h-full aspect-square flex justify-center items-center text-[#FF6D01]">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100 sora-medium">Posters & creatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="z-50 relative bg-[#313335]  services w-full px-2 py-2">
        <h1 className="w-full text-center text-[#FF6D01] text-5xl my-4 sora-bold">
          Why Choose Us
        </h1>
        <div className="services-con transition-all duration-150 w-full gap-4 grid grid-cols-1 sm:grid-cols-2 px-5 my-5">
          <div className="w-[100%] p-3 flex justify-start sm:flex-1 items-center gap-4 h-auto bg-[#505355] border rounded-sm">
            <div className="icon h-[50px] aspect-square relative text-sm">
              <Image fill src="/FlashCutEdits/time2.svg" alt="time2" />
            </div>
            <p className="pl-2 text-[1rem] text-white gap-4 leading-[1.3rem] font-light sora-medium ">
              Scroll-Stopping Edits that grab attention in the first 3 seconds
            </p>
          </div>

          <div className="w-[100%] p-3 flex justify-start sm:flex-1 items-center gap-4 h-auto border-white  border bg-[#505355] rounded-sm">
            <div className="icon h-[50px] aspect-square relative text-sm">
              <Image fill src="/FlashCutEdits/time.svg" alt="time" />
            </div>
            <p className="pl-2 text-[1rem] text-white gap-4 leading-[1.3rem] font-light sora-medium ">
              Fast Delivery without compromising on quality
            </p>
          </div>
          <div className="w-[100%] p-3 flex justify-start sm:flex-1 items-center gap-4 h-auto border-white  border bg-[#505355] rounded-sm">
            <div className="icon h-[50px] aspect-square relative text-sm">
              <Image fill src="/FlashCutEdits/wallet.svg" alt="editing" />
            </div>
            <p className="pl-2 text-[1rem] text-white gap-4 leading-[1.3rem] font-light sora-medium ">
              Budget Friendly
            </p>
          </div>

          <div className="w-[100%] p-3 flex justify-start sm:flex-1 items-center gap-4 h-auto border-white  border bg-[#505355] rounded-sm">
            <div className="icon h-[50px] aspect-square relative text-sm">
              <Image
                fill
                src="/FlashCutEdits/graphic-designing.svg"
                alt="editing"
              />
            </div>
            <p className="pl-2 text-[1rem] text-white gap-4 leading-[1.3rem] font-light sora-medium ">
              Worked With Multiple Creators & Brands across different niches
            </p>
          </div>
          <div className="w-[100%] p-3 flex justify-start sm:flex-1 items-center gap-4 h-auto border-white  border bg-[#505355] rounded-sm">
            <div className="icon h-[50px] aspect-square relative text-sm">
              <Image fill src="/FlashCutEdits/growth.svg" alt="editing" />
            </div>
            <p className="pl-2 text-[1rem] text-white gap-4 leading-[1.3rem] font-light sora-medium ">
              Creative Concepts + Strategic Cuts to boost engagement
            </p>
          </div>

          <div className="w-[100%] p-3 flex justify-start sm:flex-1 items-center gap-4 h-auto border-white  border bg-[#505355] rounded-sm">
            <div className="icon h-[50px] aspect-square relative text-sm">
              <Image fill src="/FlashCutEdits/result.svg" alt="editing" />
            </div>
            <p className="pl-2 text-[1rem] text-white gap-4 leading-[1.3rem] font-light sora-medium ">
              Result-Driven Designs made to increase clicks, views & conversions
            </p>
          </div>
        </div>
      </section>
      <div className="wa-cn relative z-50 w-full h-[auto] flex justify-center mt-4">
        <div className="wa-cta mx-4 cursor-pointer leading-none flex flex-col justify-center items-center mt-6 w-[90%] h-[70px] bg-green-400 rounded-full">
          <a
            href="https://wa.me/9867009961"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center w-full "
          >
            <h1 className="text-[1.8rem] sora-bold ">Chat On Whatsapp</h1>
            <p>[+91 9867009961]</p>
          </a>
        </div>
      </div>
      <section className="z-50 relative page_3 clients-review w-full  py-4 px-2 flex justify-center items-start flex-wrap gap-5">
        <h1 className="w-full text-center text-[#FF6D01] text-4xl sora-bold">
          Testimonials
        </h1>
        {Reviews.length > 0 &&
          Reviews.map((rev, Idx) => {
            return <Review {...rev} MobileHide={Idx > 3} key={Idx} />;
          })}
      </section>
      <section className="faqs w-full">
        <FAQ />
      </section>
      <div className="wa-cn relative z-50 w-full h-[auto] flex justify-center my-4">
        <div className="wa-cta mx-4 cursor-pointer leading-none flex flex-col justify-center items-center  w-[90%] h-[70px] bg-green-400 rounded-full">
          <a
            href="https://wa.me/9867009961"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center w-full "
          >
            <h1 className="text-[1.8rem] sora-bold ">Chat On Whatsapp</h1>
            <p>[+91 9867009961]</p>
          </a>
        </div>
      </div>
    </main>
  );
};

export default page;
