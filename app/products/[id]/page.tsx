const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      <h3>Product {id}</h3>
    </div>
  );
};

export default Product;
