"use client";
import Image from "next/image";
import CountDown from "../_components/CountDown";
import LineThroughPrice from "../_components/LineThroughPrice";
import "./ai.css";

const page = () => {
  return (
    <main className="w-screen h-[500vh] overflow-x-hidden text-white px-4  bg-[#111]">
      <nav className="nav z-50 bg-[#E6A966] text-3xl fixed top-0 left-0 w-screen h-20 p-3 flex justify-center items-center">
        <h1>Register Our AI Training Webinar! &nbsp;</h1>
        <h1 className="text-[#ff4a47]">Only Few Seats Left &nbsp;</h1>
        <div className="price w-[150px] rounded-2xl cursor-pointer bg-white text-[#E6A966]">
          <LineThroughPrice linePrice={999} price={49} />
        </div>
      </nav>
      <section className="page_1  pt-32 w-screen min-h-screen flex flex-col items-center justify-start">
        <div className="count-donwn w-[500px] h-[70px] bg-[#E6A966] rounded-md">
          <CountDown targetDate="20 June 2025" />
        </div>
        <div className="home-content flex gap-14 w-full h-[auto] mt-10 px-10">
          <div className="headings flex-2 ">
            <div className="heading">
              <h1 className="text-4xl ">
                <span className="text-[#E6A966]">
                  Join our AI Training Course &nbsp;
                </span>
                and discover how to elevate your business with powerful,
                <span className="text-[#E6A966]">
                  cutting-edge AI strategies that drive real results.
                </span>
              </h1>
              <h2 className="tet-2xl opacity-80 pt-5">
                Unlock an exclusive and exciting offer when you join
                today—simply use the coupon code <span className="text-[#E6A966]">
                  CBRG26 &nbsp;
                </span> at checkout to save big
                and take the first step toward transforming your future with AI.
              </h2>
            </div>
          </div>
          <div className="image relative flex-2 h-full bg-amber-600">
            <div className="img-1 z-10 w-full absolute top-1/2 left-1/2 -translate-1/2 h-full">
              <Image fill src='/AI_Webinar/golden_bg.webp' alt='bg' />
            </div>
            <div className="img-2 z-20 w-[100%] absolute top-1/2 left-1/2 -translate-1/2 h-[100%]">
              <Image fill src='/AI_Webinar/ai-free.webp' alt='bg' />
            </div>
          </div>
        </div>
          <div className="home-cta cursor-pointer flex justify-center items-center mt-20 w-[70%] h-[70px] bg-[#E6A966] rounded-md">
            <h1 className="text-2xl">Claim Your Spot Now & Transform Your Business with AI—Limited Time Offer!</h1>
          </div>
      </section>
      <section className="page_2 pt-32 w-screen min-h-screen">
        <div className="offers-con w-full">
          <h1 className="w-full text-center text-6xl text-[#E6A966]">What We Offer</h1>
          <div className="offers mt-16 flex justify-between items-center px-20">
            <div className="offer w-[auto ] flex flex-col items-start gap-5">
              <div className="icon-con w-full flex justify-center items-center">
              <div className="icon w-[80px] h-[80px] rounded-sm bg-[#E6A966]"></div>
              </div>
              <h1 className="flex text-3xl gap-4 items-center">
                <div className="icon w-[30px] h-[30px] rounded-full bg-[#E6A966]"></div>
                <p className="opacity-80">
                Starting Journing 0 To 100
                </p>
              </h1>
              <h1 className="flex text-3xl gap-4 items-center">
                <div className="icon w-[30px] h-[30px] rounded-full bg-[#E6A966]"></div>
                <p className="opacity-80">
                Growing Bussiness In 9 Months
                </p>
              </h1>
              <h1 className="flex text-3xl gap-4 items-center">
                <div className="icon w-[30px] h-[30px] rounded-full bg-[#E6A966]"></div>
                <p className="opacity-80">
                Certificate After Complition
                </p>
              </h1>
              <h1 className="flex text-3xl gap-4 items-center">
                <div className="icon w-[30px] h-[30px] rounded-full bg-[#E6A966]"></div>
                <p className="opacity-80">
                Lifetime Portal Access
                </p>
              </h1>
            </div>
            <div className="offer w-[auto ] flex flex-col items-start gap-5">
              <div className="icon-con w-full flex justify-center items-center">
              <div className="icon w-[80px] h-[80px] rounded-sm bg-[#E6A966]"></div>
              </div>
              <h1 className="flex text-3xl gap-4 items-center">
                <div className="icon w-[30px] h-[30px] rounded-full bg-[#E6A966]"></div>
                <p className="opacity-80">
                Starting Journing 0 To 100
                </p>
              </h1>
              <h1 className="flex text-3xl gap-4 items-center">
                <div className="icon w-[30px] h-[30px] rounded-full bg-[#E6A966]"></div>
                <p className="opacity-80">
                Growing Bussiness In 9 Months
                </p>
              </h1>
              <h1 className="flex text-3xl gap-4 items-center">
                <div className="icon w-[30px] h-[30px] rounded-full bg-[#E6A966]"></div>
                <p className="opacity-80">
                Certificate After Complition
                </p>
              </h1>
              <h1 className="flex text-3xl gap-4 items-center">
                <div className="icon w-[30px] h-[30px] rounded-full bg-[#E6A966]"></div>
                <p className="opacity-80">
                Lifetime Portal Access
                </p>
              </h1>
            </div>
          </div>
          <div className="cta-con w-full h-[70px] flex justify-center items-center mt-28">
          <div className="cta bg-[#E6A966] rounded-sm px-10 flex justify-evenly items-center w-[70%] h-full">
            <h1 className="text-2xl">Webinar Will Start In</h1>
            <div className="count-down-con flex-1 h-full flex justify-center">
              <CountDown targetDate="20 June 2025" />
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className="clients-review w-full min-h-screen p-10 flex justify-start items-start flex-wrap gap-8 ">
        <div className="review w-[300px] min-h-[350px] bg-[#E6A966]">

        </div>
      </section>
    </main>
  );
};

export default page;
