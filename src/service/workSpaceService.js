import { headerToken } from "@/lib/headerToken";
import { revalidateTag } from "next/cache";

export const getAllWorkspace = async () => {
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

    const workspaces = data.payload.filter((ws) => !ws.isFavorite);
    const favorites = data.payload.filter((ws) => ws.isFavorite);

    return { workspaces, favorites };
  } catch (error) {
    console.error("Error fetching workspaces:", error);
    return { workspaces: [], favorites: [] };
  }
};

export const createWorkspace = async (formData) => {
  const headers = await headerToken();
  const workspaceName = formData.get("workspaceName");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspace`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({ workspaceName }),
    }
  );

  const result = await response.json().catch(() => ({}));
  console.log("Status:", response.status);
  console.log("Response JSON:", result);

  if (!response.ok) {
    console.error("Error creating workspace", result);
  }

  revalidateTag("workspace");
};
