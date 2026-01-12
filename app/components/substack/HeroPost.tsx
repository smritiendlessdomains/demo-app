export const HeroPost = ({ post }: { post: any }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h1 className="text-4xl font-semibold leading-tight">
          {post.title}
        </h1>

        <p className="mt-6 max-w-md text-gray-600">
          {post.contentSnippet}
        </p>

        <a
          href={post.link}
          target="_blank"
          className="mt-6 inline-block text-sm font-medium underline"
        >
          Read More →
        </a>
      </div>

      <div className="relative aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </section>
  );
};
