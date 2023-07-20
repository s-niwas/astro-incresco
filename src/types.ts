export interface TechnologyItem {
  icon: string;
  title: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
  target: string;
}

export interface ShowcaseSite {
  title: string;
  image: ImageMetadata;
}

export interface Post {
  id: string;
  slug: string;

  publishDate: Date;
  title: string;
  description?: string;

  image?: string;

  canonical?: string | URL;
  permalink?: string;

  draft?: boolean;

  excerpt?: string;
  category?: string;
  tags?: Array<string> | any;
  author?: string;
  authorRole?: string;
  authorAvatar?: string;
  authorLinkedInUrl?: string;

  Content: unknown;
  content?: string;

  readingTime?: number;
  contentSection?:any;
  authorLinkedinUrl?: string;
}

export interface MetaSEO {
  title?: string;
  description?: string;
  image?: string;

  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;

  ogTitle?: string;
  ogType?: string;
}

export interface postComponents {
  heading ?: any
}
export interface postHeading {
  heading ?: any
}