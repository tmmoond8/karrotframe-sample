import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props) {
  return <Box p="12px 24px">{children}</Box>;
}
