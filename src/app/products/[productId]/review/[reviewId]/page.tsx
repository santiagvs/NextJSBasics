export default function ProductReviews({
  params
}: {
    params: {
      productId: string,
      reviewId: string
    };
}) {
  return <h1>Review { params.reviewId } sobre o produto { params.productId }</h1>
}
