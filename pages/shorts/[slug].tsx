import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  chakra,
  Heading,
  Link as BaseLink,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import { remarkMdxImages } from "remark-mdx-images";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { postFilePaths, POSTS_PATH } from "mdx/utils";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import React, { ReactNode, useMemo } from "react";

type Props = {
  code: string;
  frontMatter: { title: string; description?: string; type?: string };
};

type MDXComponentProps = {
  children?: ReactNode;
};

export default function PostPage({ code, frontMatter }: Props): ReactNode {
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
        <Component
          components={{
            a: BaseLink,
            h2: ({ ...props }) => (
              <Heading {...props} as="h2" size="lg" mt={"1.2em"} />
            ),
            ul: ({ ...props }) => <List {...props} spacing={2} mt={"1.2em"} />,
            li: (props: MDXComponentProps) => (
              <ListItem ml={"1.2em"}>
                <ListIcon as={CheckCircleIcon} color="brand.500" />
                {props.children}
              </ListItem>
            ),
            p: ({ ...props }) => <Text {...props} mt={"1.2em"} />,
          }}
          type={frontMatter.type}
        />
      </chakra.main>
    </chakra.div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);

  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);

  const { code } = await bundleMDX(content, {
    cwd: postFilePath,
    xdmOptions: (options) => {
      options.remarkPlugins = [remarkMdxImages];

      return options;
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".png": "dataurl",
      };

      return options;
    },
  });

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
