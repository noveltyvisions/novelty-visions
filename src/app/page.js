import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function page() {
  const client = createClient();
  const page = await client.getSingle("home");

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata() {

  return {
    title: 'Novelty Visions',
    description: 'Shaping the Future with Smart Urban Solutions',
    openGraph: {
      images: ['/meta-image.png']
    }
  };
}
