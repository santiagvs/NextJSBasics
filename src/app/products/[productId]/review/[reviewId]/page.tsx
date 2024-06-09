import { notFound } from "next/navigation";

export default function ProductReviews({
  params
}: {
    params: {
      productId: string,
      reviewId: string
    };
  }) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return <h1>Review { params.reviewId } sobre o produto { params.productId }</h1>
}
