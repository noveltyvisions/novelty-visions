import RichText from "@/app/components/RichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={
        `flex flex-col items-center justify-center pt-44 px-4 space-y-8`
      }
    >
      <PrismicNextImage 
        field={slice.primary.image_logo}
        height={200}
        width={500}
        className="h-56 w-80"
      />
      <RichText
        className="font-lato text-[#044192] text-5xl font-semibold custom-shadow"
        text={slice.primary.title}
      />
      <RichText 
        className={`font-openSans text-[#FFC20A] text-5xl !mt-12 custom-shadow font-semibold tracking-tighter`}
        text={slice.primary.description}
      />
    </section>
  );
};

export default Hero;
