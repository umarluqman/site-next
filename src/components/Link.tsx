import { Link as ChakraLink, ChakraProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  href: string;
  as?: string;
  locale?: string | false;
  prefetch?: boolean;
}

export const Link = ({
  children,
  href,
  locale,
  prefetch,
  as,
  ...rest
}: LinkProps & ChakraProps) => {
  return (
    <NextLink href={href} passHref locale={locale} prefetch={prefetch} as={as}>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  );
};
