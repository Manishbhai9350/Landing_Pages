"use client";
import Image from "next/image";
import "./flashcut.css";
import { TiTick } from "react-icons/ti";

const page = () => {
  return (
    <main className="w-screen overflow-x-hidden relative text-white bg-[#111]">
      <div className="bg fixed z-10 top-1/2 left-1/2 -translate-1/2 w-screen h-screen">
        <div className="bg-in w-[100vw] h-[100vh]">

        </div>
      </div>
      <nav className="z-60  nav bg-[#111] text-3xl fixed top-0 left-0 w-screen h-20 p-1 flex justify-center items-center">
        <h1 className="text-[1.1rem] font-bold tracking-wide text-wrap text-[#E6A966]">
          Transform Your Videos into Scroll-Stopping Content
        </h1>
        {/* <div className="price w-[70px] rounded-sm text-[.8rem] cursor-pointer bg-white text-[#E6A966] ml-3">
          <LineThroughPrice linePrice={999} price={49} />
        </div> */}
      </nav>
      <section className="z-50 relative page_1  pt-12 w-screen min-h-screen flex flex-col items-center justify-start">
        <div className="home-content flex w-full flex-col gap-14 h-[auto] mt-10">
          <div className="headings flex-2">
            <div className="heading">
              <h1 className="text-4xl font-semibold px-2 text-center text-white">
                <span className="text-[#ff6647]">Professional</span> video
                editing services tailored for{" "}
                <span className="text-[#ff6647]">content creators,</span>{" "}
                <span className="text-[#ff6647]">coaches</span> and{" "}
                <span className="text-[#ff6647]">bussiness</span>.
              </h1>
              <h1 className="text-2xl text-center pt-5">
                <span>Boost Your Results with </span>
                <span className="bg-[#E6A966] p-1 rounded-sm">
                  Flashcut Edits
                </span>
              </h1>
            </div>
          </div>
          <div className="video w-full h-[200px] bg-amber-700 m-2"></div>
        </div>
        <div className="home-cta mx-2 cursor-pointer flex justify-center items-center mt-20 w-[100%] h-[70px] bg-[#E6A966] rounded-sm">
          <h1 className="text-3xl font-semibold">
            Hurry Up! Book A Free Call Now
          </h1>
        </div>
      </section>
      <section className="z-50 relative page_2 pt-24 w-screen min-h-screen">
        <div className="offers-con w-full">
          <h1 className="w-full text-center text-5xl font-bold text-[#E6A966]">
            Who Is This For
          </h1>
          <div className="offers mt-12 flex justify-between items-center px-10">
            <div className="offer w-full flex flex-col items-start justify-start gap-5">
              <h1 className="flex text-[1.2rem] gap-4 items-center">
                <div className="icon w-[30px] h-[30px] flex justify-center items-center text-white aspect-square rounded-full bg-[#E6A966]">
                  <p className="w-full h-full flex justify-center items-center">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100">Business owners</p>
              </h1>
              <h1 className="flex text-[1.2rem] gap-4 items-center">
                <div className="icon w-[30px] h-[30px] flex justify-center items-center text-white aspect-square rounded-full bg-[#E6A966]">
                  <p className="w-full h-full flex justify-center items-center">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100">Content Creators / YouTubers</p>
              </h1>
              <h1 className="flex text-[1.2rem] gap-4 items-center">
                <div className="icon w-[30px] h-[30px] flex justify-center items-center text-white aspect-square rounded-full bg-[#E6A966]">
                  <p className="w-full h-full flex justify-center items-center">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100">Coaches & Online Educators</p>
              </h1>
              <h1 className="flex text-[1.2rem] gap-4 items-center">
                <div className="icon w-[30px] h-[30px] flex justify-center items-center text-white aspect-square rounded-full bg-[#E6A966]">
                  <p className="w-full h-full flex justify-center items-center">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100">
                  E-commerce Brands / Dropshipping Stores
                </p>
              </h1>
              <h1 className="flex text-[1.2rem] gap-4 items-center">
                <div className="icon w-[30px] h-[30px] flex justify-center items-center text-white aspect-square rounded-full bg-[#E6A966]">
                  <p className="w-full h-full flex justify-center items-center">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100">Real Estate Agents</p>
              </h1>
              <h1 className="flex text-[1.2rem] gap-4 items-center">
                <div className="icon w-[30px] h-[30px] flex justify-center items-center text-white aspect-square rounded-full bg-[#E6A966]">
                  <p className="w-full h-full flex justify-center items-center">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="opacity-100">
                  Agencies (Marketing, Branding, Influencer)
                </p>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="z-50 relative services w-full px-2 py-10">
        <h1 className="w-full text-center text-[#FF6D01] text-6xl my-4 font-semibold">
          Our Services
        </h1>
        <div className="services-con w-full gap-4 flex flex-wrap px-5 my-5">
          <div className="w-[100%] p-3 flex justify-center items-center gap-4 h-auto border-[#E6A966] border rounded-sm">
            <div className="icon h-[50px] aspect-square relative text-sm">
              <Image fill src='/FlashCutEdits/video-editing.svg' alt="editing" />
            </div>
            <h1 className="text-2xl text-[#E6A966] font-semibold">
              Video Editing
            </h1>
          </div>
          <div className="w-[100%] p-3 flex justify-center items-center gap-4 h-auto border-[#E6A966] border rounded-sm">
            <div className="icon h-[50px] aspect-square relative text-sm">
              <Image fill src='/FlashCutEdits/graphic-designing.svg' alt="editing" />
            </div>
            <h1 className="text-2xl text-[#E6A966] font-semibold">
              Graphic Designing
            </h1>
          </div>
        </div>
      </section>
      <section className="z-50 relative page_3 clients-review w-full min-h-screen p-10 flex justify-start items-start flex-wrap gap-5">
        <h1 className="w-full text-center text-[#FF6D01] text-5xl font-semibold">
          What Clients Says
        </h1>
        <div className="review p-4 relative w-[100%] max-h-[350px]">
          <div className="bg border z-[51] rounded-sm border-[#e6a8669e] w-full h-full top-0 left-0 absolute overflow-hidden">
            <Image
              className="object-cover opacity-10"
              fill
              src="/FlashCutEdits/golden_bg.webp"
              alt="bg"
            />
          </div>
          <div className="client-info flex justify-start items-start gap-4 relative z-[52] w-full h-[60px] ">
            <div className="client-dp relative h-[80%] aspect-square overflow-hidden rounded-full">
              <Image
                className="object-cover"
                fill
                src="/FlashCutEdits/golden_bg.webp"
                alt="bg"
              />
            </div>
            <div className="namspace">
              <div className="name">
                <h1 className="font-semibold">John Doe</h1>
              </div>
              <div className="profession">
                <p className="text-sm opacity-70">Senior Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="client-review relative mt-2 z-[52]">
            <p className="text-[.9rem] opacity-90">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              aliquid corporis doloremque! Quas veritatis optio repellendus.
              Accusantium alias aut similique aperiam culpa error deserunt,
              consectetur quas porro pariatur eaque asperiores cum repellat!
              Doloribus harum dolores delectus sed ratione autem praesentium!"
            </p>
          </div>
        </div>
        <div className="review p-4 relative w-[100%] max-h-[350px]">
          <div className="bg border z-[51] rounded-sm border-[#e6a8669e] w-full h-full top-0 left-0 absolute overflow-hidden">
            <Image
              className="object-cover opacity-10"
              fill
              src="/FlashCutEdits/golden_bg.webp"
              alt="bg"
            />
          </div>
          <div className="client-info flex justify-start items-start gap-4 relative z-[52] w-full h-[60px] ">
            <div className="client-dp relative h-[80%] aspect-square overflow-hidden rounded-full">
              <Image
                className="object-cover"
                fill
                src="/FlashCutEdits/golden_bg.webp"
                alt="bg"
              />
            </div>
            <div className="namspace">
              <div className="name">
                <h1 className="font-semibold">John Doe</h1>
              </div>
              <div className="profession">
                <p className="text-sm opacity-70">Senior Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="client-review relative mt-2 z-[52]">
            <p className="text-[.9rem] opacity-90">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              aliquid corporis doloremque! Quas veritatis optio repellendus.
              Accusantium alias aut similique aperiam culpa error deserunt,
              consectetur quas porro pariatur eaque asperiores cum repellat!
              Doloribus harum dolores delectus sed ratione autem praesentium!"
            </p>
          </div>
        </div>
        <div className="review p-4 relative w-[100%] max-h-[350px]">
          <div className="bg border z-[51] rounded-sm border-[#e6a8669e] w-full h-full top-0 left-0 absolute overflow-hidden">
            <Image
              className="object-cover opacity-10"
              fill
              src="/FlashCutEdits/golden_bg.webp"
              alt="bg"
            />
          </div>
          <div className="client-info flex justify-start items-start gap-4 relative z-[52] w-full h-[60px] ">
            <div className="client-dp relative h-[80%] aspect-square overflow-hidden rounded-full">
              <Image
                className="object-cover"
                fill
                src="/FlashCutEdits/golden_bg.webp"
                alt="bg"
              />
            </div>
            <div className="namspace">
              <div className="name">
                <h1 className="font-semibold">John Doe</h1>
              </div>
              <div className="profession">
                <p className="text-sm opacity-70">Senior Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="client-review relative mt-2 z-[52]">
            <p className="text-[.9rem] opacity-90">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              aliquid corporis doloremque! Quas veritatis optio repellendus.
              Accusantium alias aut similique aperiam culpa error deserunt,
              consectetur quas porro pariatur eaque asperiores cum repellat!
              Doloribus harum dolores delectus sed ratione autem praesentium!"
            </p>
          </div>
        </div>
      </section>
      <section className="z-50 relative page_4  pt-24 w-screen min-h-screen">
        <div className="offers-con w-full">
          <h1 className="w-full text-center text-5xl font-bold text-[#E6A966]">
            Why Choose US?
          </h1>
          <div className="offers mt-12 flex justify-between items-center px-10">
            <div className="offer w-full flex flex-col items-start justify-start gap-5">
              <div className="flex  idiv-center">
                <div className="icon w-[30px] h-[30px] flex justify-center items-center text-white aspect-square rounded-full bg-[#E6A966]">
                  <p className="w-full h-full flex justify-center items-center">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="pl-2 text-[1.1rem] gap-4 leading-[1.3rem] opacity-80 font-light ">
                  Scroll-Stopping Edits that grab attention in the first 3
                  seconds
                </p>
              </div>
              <div className="flex  items-center">
                <div className="icon w-[30px] h-[30px] flex justify-center items-center text-white aspect-square rounded-full bg-[#E6A966]">
                  <p className="w-full h-full flex justify-center items-center">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="pl-2 text-[1.1rem] gap-4 leading-[1.3rem] opacity-80 font-light ">
                  Fast Delivery without compromising on quality
                </p>
              </div>
              <div className="flex  items-center">
                <div className="icon w-[30px] h-[30px] flex justify-center items-center text-white aspect-square rounded-full bg-[#E6A966]">
                  <p className="w-full h-full flex justify-center items-center">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="pl-2 text-[1.1rem] gap-4 leading-[1.3rem] opacity-80 font-light ">
                  Budget Friendly
                </p>
              </div>
              <div className="flex  items-center">
                <div className="icon w-[30px] h-[30px] flex justify-center items-center text-white aspect-square rounded-full bg-[#E6A966]">
                  <p className="w-full h-full flex justify-center items-center">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="pl-2 text-[1.1rem] gap-4 leading-[1.3rem] opacity-80 font-light ">
                  Worked With Multiple Creators & Brands across different niches
                </p>
              </div>
              <div className="flex  items-center">
                <div className="icon w-[30px] h-[30px] flex justify-center items-center text-white aspect-square rounded-full bg-[#E6A966]">
                  <p className="w-full h-full flex justify-center items-center">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="pl-2 text-[1.1rem] gap-4 leading-[1.3rem] opacity-80 font-light ">
                  Creative Concepts + Strategic Cuts to boost engagement
                </p>
              </div>
              <div className="flex  items-center">
                <div className="icon w-[30px] h-[30px] flex justify-center items-center text-white aspect-square rounded-full bg-[#E6A966]">
                  <p className="w-full h-full flex justify-center items-center">
                    <TiTick size={26} />
                  </p>
                </div>
                <p className="pl-2 text-[1.1rem] gap-4 leading-[1.3rem] opacity-80 font-light ">
                  Result-Driven Designs made to increase clicks, views &
                  conversions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
