export interface BlogType {
    id: string;
    category: string;
    tag: string;
    title: string;
    date: string;
    author: string;
    thumbImg: string;
    coverImg: string;
    subImg: Array<string>;
    description: string;
    slug: string;
}