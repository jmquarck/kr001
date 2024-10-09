export interface Content {
  id: string;
  type: 'text' | 'image' | 'video' | 'audio';
  title: string;
  description: string;
  data: string;
  price: number;
  createdAt: Date;
  author: string;
  topics: string[];
  thumbnail: string;
}

export interface FeedState {
  contents: Content[];
}