import { Text, HStack, Box, Image } from "@chakra-ui/react";
import { useNavigator } from "@karrotframe/navigator";
import useSWR from "swr";
import Layout from "../../components/Layout";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Home() {
  const { push } = useNavigator();
  const { data, error } = useSWR<{
    collections: {
      id: number;
      name: string;
      poster_urls: string[];
    }[];
  }>("/api/getCollections.json", fetcher);
  console.log("data", data);

  return (
    <Layout.Page px="16px">
      <Text fontSize={22} fontWeight={700}>
        Box Office
      </Text>
      <HStack overflowX="auto" as="ol" mt="12px">
        {data?.collections.map(({ id, name, poster_urls }) => (
          <Box
            key={id}
            as="li"
            minW="min(25vw, 200px)"
            cursor="pointer"
            onClick={() => {
              push("/detail");
            }}
          >
            <Image src={poster_urls[0]} w="100%" h="auto" borderRadius="6px" />
            <Text fontSize={14} py="4px">
              {name}
            </Text>
          </Box>
        ))}
      </HStack>
    </Layout.Page>
  );
}
