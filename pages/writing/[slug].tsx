import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import rehypeHighlight from "rehype-highlight";
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  frontMatter: { [key: string]: any };
  mdxSource: MDXRemoteSerializeResult;
}

const components = {};

export default function Post({ frontMatter, mdxSource }: Props) {
  return (
    <div className="prose">
      <h1>{frontMatter.title as string}</h1>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { slug } = context.params!;
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight, rehypeMathjax],
      remarkPlugins: [remarkMath],
    },
  });

  return {
    props: {
      frontMatter,
      mdxSource,
    },
  };
};
