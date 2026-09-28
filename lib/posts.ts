import * as fs from 'node:fs/promises';

interface Post {
  slug: string,
  title: string,
  date: string,
  excerpt: string,
  content: string,
  tags: string[]
}

export default async function Readposts(){
  let data = "";
  let data1 = "";
  let data2 = "";
  try {
     data = await fs.readFile("./content/posts/firstPost.json" , "utf-8");
     data1 = await fs.readFile("./content/posts/secondPost.json" , "utf-8");
     data2 = await fs.readFile("./content/posts/thirdPost.json" , "utf-8");
  } catch (error){
    console.log("Error fetchind data from posts" + error);
  }

const post:Post = JSON.parse(data);
const post1: Post = JSON.parse(data1);
const post2: Post = JSON.parse(data2);



return {post , post1 , post2};
}