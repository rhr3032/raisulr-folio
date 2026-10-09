import { addCollection } from "@iconify/vue";
import { iconCollections } from "@/utils/icon-data";

// Register every icon the site uses up-front so <Icon> renders synchronously
// (no runtime requests to the Iconify API, no icon pop-in).
export default defineNuxtPlugin(() => {
  iconCollections.forEach((collection) => addCollection(collection));
});
