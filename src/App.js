import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CreatePage from "./components/createPage";
import Home from "./components/home";
import Languages from "./components/Languages";
import Plugins from "./components/Plugins";
import Toolspace from "./components/Toolspace";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<Languages />} />
      <Route path="Plugins" element={<Plugins />} />
      <Route path="Toolspace" element={<Toolspace />} />
      <Route path="Create" element={<CreatePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
