'use client'
import RichText from "@/app/components/RichText";
import { useAnimation } from "@/hooks/useAnimation";
import { PrismicNextImage } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param {FooterProps}
 */
const Footer = ({ slice }) => {

  useAnimation('.footer', '.footer')

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={
        `flex footer anim-time bg-primary flex-col items-center justify-center py-44 sm:py-22 px-4 space-y-20 opacity-0`
      }
    >
      <RichText 
        className={`font-openSans text-white text-3xl lg:text-5xl !mt-8 sm:!mt-12 custom-shadow font-semibold text-center tracking-tighter`}
        text={slice.primary.description}
      />
      <PrismicNextImage 
        field={slice.primary.logo}
        height={200}
        width={500}
        className="h-30 w-40 sm:h-56 sm:w-80"
      />
      <RichText
        className="font-lato text-white text-3xl lg:text-5xl font-semibold custom-shadow"
        text={slice.primary.title}
      />
    </section>
  );
};

export default Footer;
