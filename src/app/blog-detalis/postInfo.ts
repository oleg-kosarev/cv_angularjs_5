export interface PostInfo {
  title: string;
  user: string;
  date: string;
  tags: object;
  hidden_body: string;
  about_author: string;
  type: string;
  images: object;
  video: object;
}

export interface ImagesPostInfo {
  title: string;
  url: string;
}

export interface VideoPostInfo {
  title: string;
  url: string;
}
export interface TagsPostInfo {
  title: string;
}
