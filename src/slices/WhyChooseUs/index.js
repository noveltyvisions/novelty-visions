import BlockA from "@/app/components/BlockA";

/**
 * @typedef {import("@prismicio/client").Content.WhyChooseUsSlice} WhyChooseUsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhyChooseUsSlice>} WhyChooseUsProps
 * @param {WhyChooseUsProps}
 */
const WhyChooseUs = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex items-center py-6 justify-center bg-secondary"
    >
      <BlockA
        title="Why choose us?"
        bg="bg-white"
        textColor="text-primary"
        slice={slice.primary.choosetexts} 
      />
    </section>
  );
};

export default WhyChooseUs;
