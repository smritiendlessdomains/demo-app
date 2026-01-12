import Parser from "rss-parser";

const parser = new Parser();

export async function fetchSubstackPosts() {
  const feed = await parser.parseURL(
    "https://smritisingh7.substack.com/feed"
  );

  return feed.items.map((item: any) => {
    // ✅ IMAGE EXTRACTION (IMPORTANT)
    const image =
      item.enclosure?.url ||
      item.enclosure?.["@_url"] ||
      extractImageFromHTML(item["content:encoded"]) ||
      null;

    return {
      title: item.title,
      link: item.link,
      contentSnippet: item.contentSnippet || item.content,
      pubDate: new Date(item.pubDate).toLocaleDateString(),
      image, // ✅ THIS FIXES EVERYTHING
    };
  });
}

// 🔹 fallback for posts without enclosure
function extractImageFromHTML(html?: string) {
  if (!html) return null;
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
}
