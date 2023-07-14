// adapted from https://github.com/withastro/astro.build/blob/112bdc723b3ba305997c95d7ce02304624d0d3ce/src/data/showcase/index.ts

import type { ShowcaseSite } from "~/types";
import { useStoryblokApi } from "@storyblok/astro";

const storyblokApi = useStoryblokApi();
let content: { clients: any[] };
try {
  const { data } = await storyblokApi.get("cdn/stories/clientssection", {
    version: import.meta.env.DEV ? "draft" : "published",
  });
  content = data.story.content;
} catch (error) {}

let _loadShowcase: Promise<Array<ShowcaseSite>>;

async function loadShowcase(): Promise<Array<ShowcaseSite>> {
  const sites = await Promise.all(
    content?.clients?.map(async (site: any) => {
      if (!site?.logo?.filename.startsWith("https")) {
        console.error(
          `Image URL for "${site.title}" is invalid (provided: "${site?.logo?.filename}")`
        );
      }
      return {
        ...site,
        image: {
          src: site?.logo?.filename,
        },
      };
    })
  );

  return sites;
}

export async function getShowcase() {
  _loadShowcase = _loadShowcase || loadShowcase();
  return _loadShowcase;
}
