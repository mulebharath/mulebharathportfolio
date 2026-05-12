import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

function App() {
  return <RouterProvider router={router} />;
}

export default App;
