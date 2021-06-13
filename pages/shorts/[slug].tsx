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
import { POSTS_PATH } from "mdx/utils";
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
  if (params?.slug) {
    const postFilePath = path.join(POSTS_PATH, `${params?.slug}`, "index.mdx");

    const directory = path.join(POSTS_PATH, `${params?.slug}`);

    const source = await fs.promises.readFile(postFilePath);

    const { content, data } = matter(source);

    const imagesUrl = `/img/post/${params.slug}/`;

    const { code } = await bundleMDX(content, {
      cwd: directory,
      xdmOptions: (options) => {
        options.remarkPlugins = [remarkMdxImages];

        return options;
      },
      esbuildOptions: (options) => {
        options.outdir = path.join(process.cwd(), "public", imagesUrl);

        options.loader = {
          ...options.loader,
          ".svg": "dataurl",
          ".png": "dataurl",
        };

        options.publicPath = imagesUrl;
        options.write = true;

        return options;
      },
    });

    return {
      props: {
        code,
        frontMatter: data,
      },
    };
  }

  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dirs = await fs.promises.readdir(POSTS_PATH);

  const paths = dirs
    .filter((filename: string) => filename !== ".DS_Store")
    .map((slug: string) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
