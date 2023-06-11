import { Suspense } from "react";
import ProductDetails from "../components/ProductDetails";
import { Await, defer, json, useRouteLoaderData } from "react-router-dom";

const ProductPage = () => {
  const { event } = useRouteLoaderData("product-details");
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>loading</p>}>
      <Await resolve={event}>
        {(loadProduct) => {
          return <ProductDetails itemData={loadProduct} />;
        }}
      </Await>
    </Suspense>
  );
};

async function loadProduct(id) {
  const response = await fetch("https://fakestoreapi.com/products/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch the product for this specefic ID!" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

export async function loader({ request, params }) {
  const id = params.productId; //productId is passed from apps.js router the name should be identical
  return defer({
    event: await loadProduct(id),
  });
}

export default ProductPage;
