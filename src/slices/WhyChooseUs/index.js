'use client'
import BlockA from "@/app/components/BlockA";
import { useAnimation } from "@/hooks/useAnimation";
/**
 * @typedef {import("@prismicio/client").Content.WhyChooseUsSlice} WhyChooseUsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhyChooseUsSlice>} WhyChooseUsProps
 * @param {WhyChooseUsProps}
 */
const WhyChooseUs = ({ slice }) => {

  useAnimation('.choose', '.choose', true)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex items-center py-12 justify-center bg-secondary"
    >
      <BlockA
        title="Why choose us?"
        bg="bg-white"
        textColor="text-primary"
        slice={slice.primary.choosetexts} 
        className="choose anim-time scale-down"
      />
    </section>
  );
};

export default WhyChooseUs;
