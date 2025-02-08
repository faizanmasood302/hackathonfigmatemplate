// import createImageUrlBuilder from '@sanity/image-url'
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";


// // https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder({ projectId, dataset })

// export const urlFor = (source: SanityImageSource) => {
//   return builder.image(source)
// }
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client'; // Adjust the path to your Sanity client

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source).url();
}