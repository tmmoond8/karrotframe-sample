import React from "react";
import MainTabsPage from "./pages/MainTabsPage";
import DetailPage from "./pages/DetailPage";
import { useColorMode } from "@chakra-ui/react";
import { useAppContext } from "./AppContext";

import { Navigator, Screen } from "@karrotframe/navigator";

const App: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { karrotTheme } = useAppContext();

  React.useEffect(() => {
    if (colorMode === "dark") {
      toggleColorMode();
    }
  }, []);

  return (
    <Navigator theme={karrotTheme}>
      <Screen path="/" component={MainTabsPage} />
      <Screen path="/detail" component={DetailPage} />
    </Navigator>
  );
};

export default App;
