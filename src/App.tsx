import React from "react";
import MainTabsPage from "./pages/MainTabsPage";
import { useColorMode } from "@chakra-ui/react";

import { Navigator, Screen } from "@karrotframe/navigator";

const App: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  React.useEffect(() => {
    if (colorMode === "dark") {
      toggleColorMode();
    }
  }, []);

  return (
    <Navigator>
      <Screen path="/" component={MainTabsPage} />
    </Navigator>
  );
};

export default App;
