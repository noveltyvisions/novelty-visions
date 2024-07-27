/**
 * @typedef {import("@prismicio/client").Content.ProductsSlice} ProductsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductsSlice>} ProductsProps
 * @param {ProductsProps}
 */
const Products = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for products (variation: {slice.variation}) Slices
    </section>
  );
};

export default Products;
