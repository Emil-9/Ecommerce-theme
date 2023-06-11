import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import FAQPage from "./pages/FAQ";
import Blog from "./pages/Blog";
import ShopPage from "./pages/ShopPage";
import ProductPage, {
  loader as productDetailsLoader,
} from "./pages/ProductPage";
import ProductsRoot from "./pages/ProductsRoot";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: ErrorPage,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/faq",
          element: <FAQPage />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/shop",
          element: <ShopPage />,
        },
        {
          path: "/products",
          element: <ProductsRoot />,
          children: [
            {
              path: ":productId",
              id: "product-details",
              loader: productDetailsLoader,
              children: [
                {
                  index: true,
                  element: <ProductPage />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
