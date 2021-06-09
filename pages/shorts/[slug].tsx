import fs from "fs";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import React, { useMemo } from "react";
import {
  chakra,
  Heading,
  Link as BaseLink,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { POSTS_PATH, postFilePaths } from "mdx/utils";

type Props = {
  code: string;
  frontMatter: { title: string; description?: string };
};

export default function PostPage({ code, frontMatter }: Props) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <chakra.div w="full" maxWidth={688} m="0 auto" p={{ base: 4, sm: 0 }}>
      <Heading mb={4} mt={8} as="h1" size="xl">
        {frontMatter.title}
      </Heading>
      {frontMatter.description && (
        <Text color={textColor}>{frontMatter.description}</Text>
      )}

      <chakra.main mt={8}>
        <Component components={{ a: BaseLink }} />
      </chakra.main>
    </chakra.div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);

  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
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
    .map((path: string) => path.replace(/\.mdx?$/, ""))
    .map((slug: string) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
