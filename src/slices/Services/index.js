'use client'
import BlockA from "@/app/components/BlockA";
import { useAnimation } from "@/hooks/useAnimation";
/**
 * @typedef {import("@prismicio/client").Content.ServicesSlice} ServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServicesSlice>} ServicesProps
 * @param {ServicesProps}
 */
const Services = ({ slice }) => {

  useAnimation('.services', '.services', true)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex items-center py-6 justify-center bg-primary"
      >
        <BlockA 
          title="Services"
          slice={slice.primary.services_text}
          bg="bg-white"
          textColor="text-primary"
          className="services anim-time scale-down"
        />
    </section>
  );
};

export default Services;
