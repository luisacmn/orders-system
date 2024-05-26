import "./global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <>
      <ThemeProvider storageKey="cakeshop-theme" defaultTheme="dark">
        <RouterProvider router={router} />
        <Toaster richColors />
      </ThemeProvider>
    </>
  );
}
