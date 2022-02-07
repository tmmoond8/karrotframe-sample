import React from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { useAppContext } from "../../AppContext";

export default function MyPage() {
  const [value, setValue] = React.useState("");
  const { karrotTheme, setKarrotTheme } = useAppContext();

  return (
    <RadioGroup onChange={setKarrotTheme} value={karrotTheme}>
      <Stack direction="row">
        <Radio value="Android">Android</Radio>
        <Radio value="Cupertino">Cupertino</Radio>
      </Stack>
    </RadioGroup>
  );
}
