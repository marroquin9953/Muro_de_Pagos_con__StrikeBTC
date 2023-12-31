import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Heading,
  Text,
  FormControl,
  FormLabel,
  Link,
  Stack,
  Box,
  Flex,
} from "@chakra-ui/react";
import Button from "../Button";
import Input from "../Input";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    router.push(`/create/${e.target.username.value}`);
  };

  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="PlebPay ⚡ - Create a Bitcoin Lightning paywall and get paid directly to your Strike
        account."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://plebpay.com/distracted-boyfriend-meme.jpeg?bustCache=1" />
        <meta property="og:url" content="https://plebpay.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PlebPay ⚡" />
        <meta
          name="twitter:description"
          content="Create a Bitcoin Lightning paywall and get paid directly to your Strike
        account."
        />
        <meta
          name="twitter:image"
          content="https://plebpay.com/distracted-boyfriend-meme.jpeg?bustCache=1"
        />
      </Head>
      <Flex height={626} direction="column" justifyContent="space-between">
        <Box maxW={388}>
          <Heading as="h1" size="3xl" mb={4}>
            PlebPay ⚡️
          </Heading>
          <Text mb={16}>
            Create a Bitcoin Lightning paywall and get paid directly to your
            Strike account.
          </Text>
          <form onSubmit={handleSubmit}>
            <Stack
              alignItems="flex-end"
              spacing={4}
              direction={{ base: "column", sm: "row" }}
            >
              <FormControl>
                <FormLabel>Strike Username</FormLabel>
                <Input
                  name="username"
                  placeholder="jack"
                  autoFocus
                  required
                  autoComplete="off"
                />
              </FormControl>
              <Button isLoading={isLoading} type="submit">
                OK
              </Button>
            </Stack>
          </form>
        </Box>
        <Text>
          Need a username?{" "}
          <Link href="https://strike.me/download" isExternal variant="brand">
            Click here
          </Link>{" "}
          to download Strike and get started.
        </Text>
      </Flex>
      <a
        href="https://github.com/SamSamskies/strike-paywall"
        style={{ position: "fixed", top: 0, right: 0 }}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
          className="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        />
      </a>
    </>
  );
}
