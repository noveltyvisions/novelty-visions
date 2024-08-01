'use client'
import ContactItem from "@/app/components/ContactItem";
import RichText from "@/app/components/RichText";
import { useAnimation } from "@/hooks/useAnimation";
/**
 * @typedef {import("@prismicio/client").Content.ContactSlice} ContactSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSlice>} ContactProps
 * @param {ContactProps}
 */
const Contact = ({ slice }) => {

  useAnimation('.contact', '.contact', true)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="contact anim-time scale-down flex flex-col items-center justify-center px-6 py-12"
    >
      <RichText 
        className="uppercase text-secondary custom-shadow text-3xl mt-6 font-lato"
        text="CONTACT"
      />
      <div className="space-y-6 mt-12 flex flex-col w-full sm:w-[400px] items-center justify-center">
        <ContactItem
          linkClassName="w-fit mx-auto px-4"
          textClassName="text-xl"
          link={slice.primary.telephone}
          field={slice.primary.telephone_icon}
        />
        <ContactItem 
          linkClassName="px-6"
          textClassName="text-xl"
          link={slice.primary.email}
          field={slice.primary.email_icon}
        />
        <div className="flex w-full !justify-between">
          <ContactItem 
            link={slice.primary.facebook}
            field={slice.primary.facebook_icon}
            isText
            linkClassName="px-6"
            text="Facebook"
          />
          <ContactItem 
            link={slice.primary.instagram}
            field={slice.primary.instagram_icon}
            isText
            linkClassName="px-6"
            text="Instagram"
          />
        </div>
      </div>
      <p className="font-lato text-primary font-bold mt-12 text-lg w-full sm:w-2/4 text-center">
        {slice.primary.description}
      </p>
    </section>
  );
};

export default Contact;
