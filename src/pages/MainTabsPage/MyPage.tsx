import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { useAppContext } from "../../AppContext";

export default function MyPage() {
  const { karrotTheme, setKarrotTheme } = useAppContext();

  return (
    <Layout.Page>
      <RadioGroup onChange={setKarrotTheme} value={karrotTheme}>
        <Stack direction="row">
          <Radio value="Android">Android</Radio>
          <Radio value="Cupertino">Cupertino</Radio>
        </Stack>
      </RadioGroup>
    </Layout.Page>
  );
}
