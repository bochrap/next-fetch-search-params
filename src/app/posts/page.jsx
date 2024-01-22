import { Libre_Barcode_128 } from "next/font/google";
import Link from "next/link";

export default async function PostsPage({ searchParams }) {
  console.log("searchParams", searchParams);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await response.json();

  if (searchParams.sort === "desc") {
    posts.reverse();
  }
  return (
    <div>
      <h1>POSTS</h1>
      <Link href={"/posts?sort=asc"}>Sort ascending</Link>
      <Link href={"/posts?sort=desc"}>Sort descending</Link>
      <br />
      <br />
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title} ({post.userId})
            </Link>
          </div>
        );
      })}
    </div>
  );
}
