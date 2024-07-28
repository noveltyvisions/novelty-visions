import BlockA from "@/app/components/BlockA";

/**
 * @typedef {import("@prismicio/client").Content.ServicesSlice} ServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServicesSlice>} ServicesProps
 * @param {ServicesProps}
 */
const Services = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="services flex items-center py-6 justify-center bg-primary"
      >
        <BlockA 
          title="Services"
          slice={slice.primary.services_text}
          bg="bg-white"
          textColor="text-primary"
        />
    </section>
  );
};

export default Services;
