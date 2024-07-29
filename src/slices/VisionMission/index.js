'use client'
import RichText from "@/app/components/RichText";
import { useAnimation } from "@/hooks/useAnimation";

/**
 * @typedef {import("@prismicio/client").Content.VisionMissionSlice} VisionMissionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VisionMissionSlice>} VisionMissionProps
 * @param {VisionMissionProps}
 */
const VisionMission = ({ slice }) => {

  const textData = [
    {
      title: 'Vision',
      description: slice.primary.vision_description
    },
    {
      title: 'Mission',
      description: slice.primary.mission_description
    },
  ]

  useAnimation('.vision-mission', '.vision-mission', true)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="vision-mission anim-time scale-down flex flex-col items-center justify-center pb-6"
    >
      {textData.map(item => (
        <>
        <RichText 
          className={`font-lato text-2xl font-bold custom-shadow text-primary !mt-4`}
          text={item.title}
        />
        <RichText 
          className={`!my-2 text-center text-primary text-xl w-3/4 tracking-tighter`}
          text={item.description}
        />
        </>
      ))}
    </section>
  );
};

export default VisionMission;
