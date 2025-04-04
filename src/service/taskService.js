import { headerToken } from "@/lib/headerToken";

export const getAllTasks = async (id) => {
  try {
    const headers = await headerToken();

    console.log("headers", headers);

    if (
      !headers?.Authorization ||
      headers.Authorization.includes("undefined")
    ) {
      console.log("User not authenticated, skipping fetch.");
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/tasks/workspace/${id}`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch tasks: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};
