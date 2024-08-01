import IndexLayout from "@/routes/Index";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <IndexLayout />
    </ThemeProvider>
  );
}

export default App;
