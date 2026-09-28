import * as fs from 'node:fs/promises';


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

data = JSON.parse(data);
data1 = JSON.parse(data1);
data2 = JSON.parse(data2);

return {data , data1 , data2}
}