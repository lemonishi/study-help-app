import IndexLayout from "@/routes/Index";
import { ThemeProvider } from "./components/theme/theme-provider";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("User not authenticated");
    }
  }, [isAuthenticated]);

  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <IndexLayout />
    </ThemeProvider>
  );
}

export default App;
