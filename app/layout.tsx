import "./global.css"
import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="max-w-6xl mx-auto flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-8">
        <Link className="text-2xl font-bold" href = "/"><h1>DevBlog</h1></Link>
        <Link className = "text-gray-600" href="./store">Store</Link>
        <Link className = "text-gray-600" href = "/about">About</Link>
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-full">Sign in</button>
        </nav>
        {children}
      </body>
    </html>
  );
}

