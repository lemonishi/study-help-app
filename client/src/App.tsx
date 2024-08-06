import IndexLayout from "@/routes/Index";
import { ThemeProvider } from "./components/theme/theme-provider";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "./actions/authSlice";

function App() {
  const dispatch = useDispatch();
  const authCheck = async () => {
    const response = await fetch("http://localhost:3000/api/user/refresh", {
      method: "POST",
      credentials: "include",
    });

    if (response.ok) {
      const json = await response.json();
      dispatch(setCredentials(json));
    }
  };

  useEffect(() => {
    authCheck();
  }, []);

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
