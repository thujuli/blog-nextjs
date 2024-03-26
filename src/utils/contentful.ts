import { createClient } from "contentful";

export const createContentClient = () => {
  return createClient({
    space: "iv13a4imlk0w",
    accessToken: "hlBnuAVkXDU8kpItHSu4nLPVsF9XMrq6pP72_GtPll8",
  });
};

const client = createContentClient();

export const getEntriesByType = async (type: any) => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items;
};

export const getBlogPosts = async () => {
  const result = await getEntriesByType("blogpost");
  const blogpost = result.map((blog) => blog.fields);
  return blogpost;
};
