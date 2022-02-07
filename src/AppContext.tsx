import React from "react";

const AppContext = React.createContext<{
  karrotTheme: "Android" | "Cupertino";
  setKarrotTheme: (karrotTheme: "Android" | "Cupertino") => void;
}>({} as any);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [karrotTheme, setKarrotTheme] = React.useState<"Android" | "Cupertino">(
    "Cupertino"
  );
  return (
    <AppContext.Provider
      value={{
        karrotTheme,
        setKarrotTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return React.useContext(AppContext);
};
