import { headerToken } from "@/lib/headerToken";

export const getAllWorkSpace = async () => {
  const headers = await headerToken();

  console.log("headers", headers);

  if (!headers?.Authorization || headers.Authorization.includes("undefined")) {
    console.log("User not authenticated, skipping fetch.");
    return { workspaces: [], favorites: [] };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspaces`,
      { headers }
    );

    if (!response.ok) {
      console.error("Failed to fetch workspaces: ", response.statusText);
      return { workspaces: [], favorites: [] };
    }

    const data = await response.json();

    // Organizing workspaces into two blocks
    const workspaces = data.payload.filter((ws) => !ws.isFavorite);
    const favorites = data.payload.filter((ws) => ws.isFavorite);

    return { workspaces, favorites };
  } catch (error) {
    console.error("Error fetching workspaces:", error);
    return { workspaces: [], favorites: [] };
  }
};
