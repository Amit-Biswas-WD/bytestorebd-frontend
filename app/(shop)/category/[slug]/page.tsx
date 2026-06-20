interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div className="site-container py-10">
      <h1 className="text-2xl font-bold capitalize">
        Category: {slug.replace("-", " ")}
      </h1>
      <p className="text-gray-500 mt-2">Showing products for {slug}</p>
    </div>
  );
}
