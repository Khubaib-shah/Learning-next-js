const Reviews = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { reviewId, productId } = await params;
  return (
    <h2>
      Review {reviewId} for {productId}{" "}
    </h2>
  );
};

export default Reviews;
