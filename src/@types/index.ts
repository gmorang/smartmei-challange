export interface Job {
  id: string;
  locationNames: string;
  title: string;
  userEmail: string;
  isFeatured: boolean;
  isPublished: boolean;
  description: string;
  applyUrl: string;
  postedAt: Date;
  createdAt: Date;
  slug: string;
}
