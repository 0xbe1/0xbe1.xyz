import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { GetStaticProps } from "next";

interface Props {
  posts: Array<{ title: string; date: string; slug: string }>;
}

export default function Writing({ posts }: Props) {
  return (
    <div className="mx-auto py-4">
      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p.slug} className="flex items-center space-x-3">
            <span className="text-gray-500 w-1/6">{p.date}</span>
            <Link href={`/writing/${p.slug}`}>
              <p className="font-bold">{p.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    const title = frontMatter.title as string;
    const date = frontMatter.date as string;
    return {
      title,
      date,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
