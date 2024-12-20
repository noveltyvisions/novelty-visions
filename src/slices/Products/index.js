'use client'
import BlockA from "@/app/components/BlockA";
import { useAnimation } from "@/hooks/useAnimation";
/**
 * @typedef {import("@prismicio/client").Content.ProductsSlice} ProductsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductsSlice>} ProductsProps
 * @param {ProductsProps}
 */
const Products = ({ slice }) => {


  useAnimation('.products', '.products', true)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="products anim-time scale-down flex items-center py-6 justify-center"
    >
      <BlockA 
        title="Products"
        slice={slice.primary.products_text}
        bg="bg-primary"
        textColor="text-white"
      />
    </section>
  );
};

export default Products;
