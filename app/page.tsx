import Readposts from "@/lib/posts"

export default async function Page(){
const posts = await Readposts();
  return (
    <div>
      <Render title={posts.post.title} excerpt ={posts.post.excerpt}></Render>
    </div>
  )
}

function Render({title , excerpt}: {title:string , excerpt:string} ){
  return (
    <div>
      <div className="mt-8 ml-8 text-xl font-bold text-gray-900">
    <h1>{title}</h1>
    </div>
    <div className="mt-2 ml-8 text-base text-gray-700 leading-relaxed">
    <h2>{excerpt}</h2>
    </div>
    </div>
  )
}