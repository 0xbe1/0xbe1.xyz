import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { GetStaticProps } from "next";

interface Props {
  posts: Array<{ title: string; date: string; draft: boolean; slug: string }>;
}

export default function Writing({ posts }: Props) {
  const publicPosts = posts.filter((p) => !p.draft);
  if (publicPosts.length === 0) {
    return <p className="text-lg">Coming soon!</p>;
  }
  return (
    <div>
      <ul className="space-y-3">
        {publicPosts.map((p) => (
          <li key={p.slug} className="flex items-center space-x-3">
            <span className="text-gray-500 w-1/8">{p.date}</span>
            <Link href="/writing/[pid]" as={`/writing/${p.slug}`}>
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const files = fs.readdirSync(path.join("posts"));
  let posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    const title = frontMatter.title as string;
    const date = frontMatter.date as string;
    const draft = frontMatter.draft as boolean;
    return {
      title,
      date,
      draft,
      slug: filename.split(".")[0],
    };
  });
  posts = posts.sort(function (a, b) {
    return b.date.localeCompare(a.date);
  });
  return {
    props: {
      posts: posts,
    },
  };
};
