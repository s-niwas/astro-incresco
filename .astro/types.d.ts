declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

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

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
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

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"post": {
"creating-a-simple-chatbot-in-salesforce-lightning-using-api-ai-in-less-than-60-mins.md": {
  id: "creating-a-simple-chatbot-in-salesforce-lightning-using-api-ai-in-less-than-60-mins.md",
  slug: "creating-a-simple-chatbot-in-salesforce-lightning-using-api-ai-in-less-than-60-mins",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"flutter-scalable-folder-structure.md": {
  id: "flutter-scalable-folder-structure.md",
  slug: "flutter-scalable-folder-structure",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"generating-a-style-dictionary-from-a-design-system-palette-using-the-adobe-XD-extension-in-VSCode.md": {
  id: "generating-a-style-dictionary-from-a-design-system-palette-using-the-adobe-XD-extension-in-VSCode.md",
  slug: "generating-a-style-dictionary-from-a-design-system-palette-using-the-adobe-xd-extension-in-vscode",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"how-i-have-created-and-deployed-restful-api-using-python-and-heroku-step-by-step-guide.md": {
  id: "how-i-have-created-and-deployed-restful-api-using-python-and-heroku-step-by-step-guide.md",
  slug: "how-i-have-created-and-deployed-restful-api-using-python-and-heroku-step-by-step-guide",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"javascript-frameworks-in-2022.md": {
  id: "javascript-frameworks-in-2022.md",
  slug: "javascript-frameworks-in-2022",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"planet-sim-wins-the-proptech-mobile-app-of-the-year-2023.md": {
  id: "planet-sim-wins-the-proptech-mobile-app-of-the-year-2023.md",
  slug: "planet-sim-wins-the-proptech-mobile-app-of-the-year-2023",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
