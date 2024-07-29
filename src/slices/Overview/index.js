'use client'
import RichText from "@/app/components/RichText";
import { useAnimation } from "@/hooks/useAnimation";

/**
 * @typedef {import("@prismicio/client").Content.OverviewSlice} OverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OverviewSlice>} OverviewProps
 * @param {OverviewProps}
 */
const Overview = ({ slice }) => {

  useAnimation('.over-view', '.over-view', true)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="over-view anim-time scale-down flex flex-col items-center justify-center mt-32 pb-2 space-y-4"
    >
      <RichText 
        className={`font-lato text-secondary custom-shadow text-3xl uppercase tracking-tighter`}
        text={slice.primary.title}
      />
      <RichText 
        className={`font-lato text-primary text-xl text-center w-3/4`}
        text={slice.primary.description}
      />
      <RichText 
        className={`font-lato text-primary font-bold !mt-2 text-xl text-center w-3/4`}
        text={slice.primary.bold_description}
      />
    </section>
  );
};

export default Overview;
