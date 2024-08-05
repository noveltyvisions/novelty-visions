'use client'
import { useAnimation } from "@/hooks/useAnimation";
import { useMultipleImageAnimation } from "@/hooks/useMultipleImageAnimation";
import { PrismicNextImage } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.ProductShowcaseSlice} ProductShowcaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductShowcaseSlice>} ProductShowcaseProps
 * @param {ProductShowcaseProps}
 */
const ProductShowcase = ({ slice }) => {

  useMultipleImageAnimation('.product-showcase', '.image')

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-screen product-showcase overflow-x-hidden h-[120vh] my-12"
      style={{
        fontSize: '1vw'
      }}
    >
      <div 
        className="text-[0.6rem] md:text-[0.6rem] xl:text-[0.8rem] 2xl:text-[1rem] h-full w-full relative"
      > 
        <div className="absolute top-[10%] left-2/4 transform -translate-x-2/4">
          <p className="font-lato text-xl font-bold">
            <span className="text-primary">{'"'}</span>
            <span className="text-secondary">HALO</span>
            <span className="text-primary">{'"'}</span>
            <span className="text-primary">-</span>
            <span className="text-primary">Smart Bin</span>
          </p>
        </div>
        <div className="bg-white absolute bottom-[10%] left-2/4 transform -translate-x-2/4">
          <p className="font-lato text-xl font-bold">
            <span className="text-primary">{'"'}</span>
            <span className="text-secondary">MOZART</span>
            <span className="text-primary">{'"'}</span>
            <span className="text-primary">-</span>
            <span className="text-primary">Smart Toilet</span>
          </p>
        </div>
        <PrismicNextImage 
          field={slice.primary.image_a}
          className="image anim-time absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 h-[20em] w-[20em]"
        />

        <PrismicNextImage 
          field={slice.primary.image_b}
          className="image anim-time absolute top-[4%] right-[6%] transform h-[22em] w-[24em]"
        />
        <PrismicNextImage 
          field={slice.primary.image_c}
          className="image anim-time absolute bottom-0 right-[2%] transform h-[28em] -z-10 w-[38em]"
        />

        <PrismicNextImage 
          field={slice.primary.image_d}
          className="image anim-time absolute top-0 left-[2%] transform h-[28em] -z-10 w-[22em]"
        />
        <PrismicNextImage 
          field={slice.primary.image_e}
          className="image anim-time absolute bottom-0 left-[8%] transform h-[20em] -z-10 w-[20em]"
        />

      </div>
    </section>
  );
};

export default ProductShowcase;
