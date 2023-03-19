export type BlogPost = {
    id: number;
    title: string;
    subtitle: string;
    category: string;
    img: string;
    description: string;
    published: string;
    author: {
        name: string;
        img: string;
        designation: string;
    };
};