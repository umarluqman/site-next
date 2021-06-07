import fs from "fs";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import { useMemo } from "react";
import { Link } from "components/Link";
import { Link as BaseLink } from "@chakra-ui/react";

import { postFilePaths, POSTS_PATH } from "blog/utils";

type Props = {
  code: string;
  frontMatter: { title: string; description?: string };
};

export default function PostPage({ code, frontMatter }: Props) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <header>
        <nav>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>

      <main>
        <Component components={{ a: BaseLink }} />
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }
        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);

  console.log({ postFilePath });

  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
  console.log({ postFilePath, content, data });
  const { code } = await bundleMDX(content);

  return {
    props: {
      code,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  console.log({ paths });

  return {
    paths,
    fallback: false,
  };
};
