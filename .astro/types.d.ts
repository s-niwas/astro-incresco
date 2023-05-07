declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}
declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	const entryMap: {
		"pages": {
"privacy-policy.md": {
  id: "privacy-policy.md",
  slug: "privacy-policy",
  body: string,
  collection: "pages",
  data: any
} & { render(): Render[".md"] },
},
"post": {
"animating-the-web-with-lottie-best-practices-for-optimization.mdx": {
  id: "animating-the-web-with-lottie-best-practices-for-optimization.mdx",
  slug: "animating-the-web-with-lottie-best-practices-for-optimization",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
} & { render(): Render[".mdx"] },
"creating-a-simple-chatbot-in-salesforce-lightning-using-api-ai-in-less-than-60-mins.mdx": {
  id: "creating-a-simple-chatbot-in-salesforce-lightning-using-api-ai-in-less-than-60-mins.mdx",
  slug: "creating-a-simple-chatbot-in-salesforce-lightning-using-api-ai-in-less-than-60-mins",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
} & { render(): Render[".mdx"] },
"delegation-and-empowerment-balancing-leadership-for-team-success.mdx": {
  id: "delegation-and-empowerment-balancing-leadership-for-team-success.mdx",
  slug: "delegation-and-empowerment-balancing-leadership-for-team-success",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
} & { render(): Render[".mdx"] },
"flutter-scalable-folder-structure.mdx": {
  id: "flutter-scalable-folder-structure.mdx",
  slug: "flutter-scalable-folder-structure",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
} & { render(): Render[".mdx"] },
"generating-a-style-dictionary-from-a-design-system-palette-using-the-adobe-XD-extension-in-VSCode.mdx": {
  id: "generating-a-style-dictionary-from-a-design-system-palette-using-the-adobe-XD-extension-in-VSCode.mdx",
  slug: "generating-a-style-dictionary-from-a-design-system-palette-using-the-adobe-xd-extension-in-vscode",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
} & { render(): Render[".mdx"] },
"how-i-have-created-and-deployed-restful-api-using-python-and-heroku-step-by-step-guide.mdx": {
  id: "how-i-have-created-and-deployed-restful-api-using-python-and-heroku-step-by-step-guide.mdx",
  slug: "how-i-have-created-and-deployed-restful-api-using-python-and-heroku-step-by-step-guide",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
} & { render(): Render[".mdx"] },
"javascript-frameworks-in-2022.mdx": {
  id: "javascript-frameworks-in-2022.mdx",
  slug: "javascript-frameworks-in-2022",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
} & { render(): Render[".mdx"] },
"navigating-feedback-a-new-managers-guide-to-effective-communication-and-growth.md": {
  id: "navigating-feedback-a-new-managers-guide-to-effective-communication-and-growth.md",
  slug: "navigating-feedback-a-new-managers-guide-to-effective-communication-and-growth",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] },
"optimizing-lodash-in-next-js-with-webpack-and-babel-plugin-lodash.mdx": {
  id: "optimizing-lodash-in-next-js-with-webpack-and-babel-plugin-lodash.mdx",
  slug: "optimizing-lodash-in-next-js-with-webpack-and-babel-plugin-lodash",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
} & { render(): Render[".mdx"] },
"planet-sim-wins-the-proptech-mobile-app-of-the-year-2023.mdx": {
  id: "planet-sim-wins-the-proptech-mobile-app-of-the-year-2023.mdx",
  slug: "planet-sim-wins-the-proptech-mobile-app-of-the-year-2023",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
} & { render(): Render[".mdx"] },
"solving-the-cors-onundrum:-an-in-depth-look-at-cross-origin-resource-sharing.mdx": {
  id: "solving-the-cors-onundrum:-an-in-depth-look-at-cross-origin-resource-sharing.mdx",
  slug: "solving-the-cors-onundrum-an-in-depth-look-at-cross-origin-resource-sharing",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
} & { render(): Render[".mdx"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
