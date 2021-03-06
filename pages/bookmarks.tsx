import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Alert,
  chakra,
  Heading,
  Text,
  Link as BaseLink,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React, { ReactNode } from "react";

import { GoogleSpreadsheet } from "google-spreadsheet";

type Bookmark = {
  addedAt: string;
  title: string;
  description?: string;
  url: string;
};

type BookmarkProps = {
  bookmarkList: Bookmark[];
};

const Bookmarks = ({ bookmarkList }: BookmarkProps): ReactNode => {
  console.log({ bookmarkList });
  const color = useColorModeValue("blue.700", "blue.200");
  const linkColor = useColorModeValue("blue.800", "blue.100");
  const dateColor = useColorModeValue("gray.600", "gray.300");

  return (
    <chakra.div w="full" maxWidth={688} m="0 auto" p={{ base: 4, sm: 0 }}>
      <Heading mb={8} mt={8} as="h1" size="xl">
        Bookmarks
      </Heading>
      <Alert color={color} display="block" mb={8}>
        List of bookmarks that I favourited from my
        <BaseLink
          href="https://www.instapaper.com/"
          isExternal
          pl={1}
          fontWeight="500"
          color={linkColor}
          whiteSpace="nowrap"
        >
          Instapaper <ExternalLinkIcon mx="2px" mt={-1} />
        </BaseLink>{" "}
      </Alert>

      {bookmarkList.map(({ title, url, addedAt }) => (
        <React.Fragment key={url}>
          <Link href={url} isExternal>
            <Heading size="md" mt={4}>
              {title}
            </Heading>
          </Link>
          <Text color={dateColor} fontSize="sm">
            {addedAt}
          </Text>
        </React.Fragment>
      ))}
    </chakra.div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const doc = new GoogleSpreadsheet(
    "1MdNUgx4D2yqm5O-pHKJzHq0Por5tJtVnu1KcRCE1EkA"
  );

  doc.useApiKey(process.env.GOOGLE_API_KEY as string);

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];

  const rows = await sheet.getRows();

  const bookmarkList = rows
    .map(({ _rawData }) => {
      return {
        addedAt: _rawData[0].split("at")[0],
        title: _rawData[1],
        description: _rawData[2],
        url: _rawData[3],
      };
    })
    .reverse();

  return {
    props: { bookmarkList },
    revalidate: 10,
  };
};

export default Bookmarks;
