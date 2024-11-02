export default function Reviews({ params }) {
  return (
    <h1>
      Reviews {params.reviewid} for product {params.productid}
    </h1>
  );
}
