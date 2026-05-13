import { RouterProvider } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}

export default App;
