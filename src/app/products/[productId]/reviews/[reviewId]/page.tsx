import { notFound } from "next/navigation";
const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h2>
      {" "}
      review {reviewId} for product {productId}
    </h2>
  );
};

export default ProductReview;
