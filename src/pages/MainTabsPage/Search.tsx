import React from "react";
import {
  Text,
  Flex,
  VStack,
  Box,
  Container,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import useSWR from "swr";
import { IoIosSearch } from "react-icons/io";
import Layout from "../../components/Layout";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Search() {
  const [search, setSearch] = React.useState("");
  const { data, error } = useSWR<{
    films: {
      id: number;
      title: string;
      year: number;
      avg_rating: string;
      poster_url: string;
    }[];
  }>("/api/search.json", fetcher);
  console.log("data", data);

  return (
    <Layout.Page>
      <Container px="16px">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<IoIosSearch color="gray.300" />}
          />
          <Input
            type="text"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearch(e.target.value);
            }}
          />
        </InputGroup>
      </Container>

      <Box borderBottom="1px solid #ccc" h="20px" w="100%" />
      <Text fontSize={22} fontWeight={700} px="16px">
        Movies
      </Text>
      <VStack as="ol" mt="12px" overflowY="auto" flex="1" p="12px 16px">
        {data?.films.map(({ id, title, poster_url, year }) => (
          <Flex key={id} as="li" w="100%">
            <Image src={poster_url} w="20vw" h="auto" borderRadius="2px" />
            <Text fontSize={14} p="4px 12px" display="flex" alignItems="center">
              {title}
            </Text>
          </Flex>
        ))}
      </VStack>
    </Layout.Page>
  );
}
