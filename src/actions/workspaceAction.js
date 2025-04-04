"use server";

import { createWorkspace } from "@/service/workspaceService";

export const createWorkspaceAction = async (formData) => {
  return await createWorkspace(formData);
};
