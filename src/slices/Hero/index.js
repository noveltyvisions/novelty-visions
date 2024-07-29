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
        `flex anim-time hero-anim flex-col items-center justify-center pt-60 sm:pt-44 px-4 space-y-8 opacity-0`
      }
    >
      <PrismicNextImage 
        field={slice.primary.image_logo}
        height={200}
        width={500}
        className="h-30 w-40 sm:h-56 sm:w-80"
      />
      <RichText
        className="font-lato text-[#044192] text-3xl lg:text-5xl font-semibold custom-shadow"
        text={slice.primary.title}
      />
      <RichText 
        className={`font-openSans text-[#FFC20A] text-3xl lg:text-5xl !mt-8 sm:!mt-12 custom-shadow font-semibold text-center tracking-tighter`}
        text={slice.primary.description}
      />
    </section>
  );
};

export default Hero;
