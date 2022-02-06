import React from "react";
import MainTabs from "./pages/MainTabs";
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
      <Screen path="/" component={MainTabs} />
    </Navigator>
  );
};

export default App;
