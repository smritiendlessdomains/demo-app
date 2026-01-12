export const PostsGrid = ({ posts }: { posts: any[] }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.map((post) => (
          <a
            key={post.link}
            href={post.link}
            target="_blank"
            className="group"
          >
            <div className="aspect-[4/3] rounded-lg bg-gray-100 overflow-hidden">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              )}
            </div>

            <p className="mt-3 text-xs text-gray-400">
              {post.pubDate}
            </p>

            <h3 className="mt-1 text-sm font-medium leading-snug group-hover:underline">
              {post.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};
