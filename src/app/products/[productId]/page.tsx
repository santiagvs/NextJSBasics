export default function ProductDetails({
  params
}: {
  params: { productId: string };
}) {
  return <h1>Detalhes sobre o produto { params.productId }</h1>
}
