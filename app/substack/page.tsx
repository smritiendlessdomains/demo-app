import { HeroPost } from "../components/substack/HeroPost";
import { PostsGrid } from "../components/substack/PostsGrid";
import { fetchSubstackPosts } from "../lib/substack";


/**
 * 🔥 FORCE LIVE FETCH ON EVERY REFRESH
 */
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function SubstackPage() {
  const posts = await fetchSubstackPosts();

  const hero = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {hero && <HeroPost post={hero} />}
      <PostsGrid posts={rest} />
    </>
  );
}
