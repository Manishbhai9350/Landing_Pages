import Image from "next/image";


const Review = ({ name = "", review = "", profession = "", dp = "",MobileHide=0}) => {
  return (
    <div className={`review py-4 p-2 relative w-[100%] sm:w-[350px] min-h-[220px] max-h-[500px] ${MobileHide ? 'hidden sm:block' : 'block' } `}>
      <div className="bg border z-[51] rounded-sm border-[#ccc6c09e] w-full h-full top-0 left-0 absolute overflow-hidden">
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
            src={dp}
            alt="bg"
          />
        </div>
        <div className="namspace">
          <div className="name">
            <h1 className="sora-bold">{name}</h1>
          </div>
          <div className="profession">
            <p className="text-sm opacity-70 sora-medium">{profession}</p>
          </div>
        </div>
      </div>
      <div className="client-review relative mt-2 z-[52]">
        <p className="text-[.9rem] opacity-90 tracking-wide sora-medium">
          {review}
        </p>
      </div>
    </div>
  );
};

export default Review;
