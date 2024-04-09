import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Update Task",
    paragraph:
      "Here you will be able to update data for a task.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Put"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Create Task",
    paragraph:
      "Here you will be able to create a task.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Post"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Get only Task",
    paragraph:
      "Here you will be able to try bringing information from a single task.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Get"],
    publishDate: "2025",
  },
  {
    id: 4,
    title: "Get Tasks",
    paragraph:
      "Here you will be able to test all our active tasks.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Get"],
    publishDate: "2025",
  },
  {
    id: 5,
    title: "Delete Tasks",
    paragraph:
      "Here you will be able to delete a specific task.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Delete"],
    publishDate: "2025",
  },
];
export default blogData;
