const ProductDetail = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  return <h2> Detail about {productId}</h2>;
};

export default ProductDetail;
