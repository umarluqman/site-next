import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Alert,
  chakra,
  Heading,
  Link as BaseLink,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "components/Link";
import fs from "fs";
import matter from "gray-matter";
import { postFilePaths, POSTS_PATH } from "mdx/utils";
import { GetStaticProps } from "next";
import path from "path";
import React from "react";

type ShortsProps = {
  posts: {
    frontMatter: { title: string; description?: string; date?: string };
    filePath: string;
  }[];
};

const Shorts = ({ posts }: ShortsProps) => {
  const textColor = useColorModeValue("gray.800", "gray.100");

  const dateColor = useColorModeValue("gray.600", "gray.300");

  const infoColor = useColorModeValue("blue.700", "blue.200");
  const linkColor = useColorModeValue("blue.800", "blue.100");

  return (
    <chakra.div w="full" maxWidth={688} m="0 auto" p={{ base: 4, sm: 0 }}>
      <Heading mb={8} mt={8} as="h1" size="xl">
        Shorts
      </Heading>

      <Alert status="info" color={infoColor}>
        Selected atomic ideas from my
        <BaseLink
          href="https://obsidian.md/"
          isExternal
          pl={1}
          fontWeight="500"
          color={linkColor}
        >
          Obsidian <ExternalLinkIcon mx="2px" mt={-1} />
        </BaseLink>
      </Alert>

      <chakra.ul mt={8} listStyleType="none">
        {posts.map((post) => {
          const slug = post.filePath.replace(/\.mdx?$/, "");

          return (
            <chakra.li key={post.filePath} mt={8}>
              <Link
                as={`/shorts/${slug}`}
                href={`/shorts/[slug]`}
                _hover={{ textDecoration: "none" }}
              >
                <Heading size="md">{post.frontMatter.title}</Heading>
                <Text color={dateColor}>{post.frontMatter.date}</Text>

                <Text mt={1} color={textColor}>
                  {post.frontMatter.description}
                </Text>
              </Link>
            </chakra.li>
          );
        })}
      </chakra.ul>
    </chakra.div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    console.log(source);
    const { data } = matter(source);

    return {
      frontMatter: data,
      filePath,
    };
  });

  return { props: { posts } };
};

export default Shorts;
