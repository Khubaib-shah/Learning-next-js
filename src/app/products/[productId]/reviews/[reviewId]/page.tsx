const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  }
  if (slug?.length === 1) {
    return <h1>viewing doc for {slug[0]}</h1>;
  }
  return <div>Docs {slug}</div>;
};

export default Docs;
