'use client'
import RichText from "@/app/components/RichText";
import { useAnimation } from "@/hooks/useAnimation";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.AboutSlice} AboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSlice>} AboutProps
 * @param {AboutProps}
 */
const About = ({ slice }) => {

  useAnimation('.about', '.about', true)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 px-6 sm:p-12 anim-time scale-down space-y-12 about flex flex-col items-center justify-center"
    >
      <RichText 
        className="uppercase text-secondary custom-shadow text-3xl mt-6 font-lato"
        text="ABOUT"
      />
      <div className="flex flex-wrap gap-20 sm:gap-60 items-center justify-center">
        {slice.primary.about_items.map((item, index) => (
          <div
            className="flex flex-col items-center" 
            key={index}
          >
            <PrismicNextImage 
              height={400}
              width={400}
              field={item.image}
              alt="image"
              className="md:h-[400px] md:w-[400px] rounded-full mb-6"
            />
            <div className="space-y-2">
              <p className="font-lato text-center font-bold text-3xl text-primary">
                {item.title}
              </p>
              <p className="text-primary font-lato font-bold text-center text-xl">
                {item.name}
              </p>
            </div>
            <p className="text-primary font-lato text-center w-full sm:w-[48ch] mt-4">
              <b>Qualifications:</b> {item.qualification_details}
            </p>
            <p className="font-lato text-primary font-bold w-full sm:w-[46ch] mt-4 text-center">
              {item.brief}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
