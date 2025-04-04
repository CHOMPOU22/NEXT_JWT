import { getAllWorkspace } from "@/service/workspaceService";

import WorkspaceForm from "./WorkspaceForm";

export default async function Sidebar() {
  const { workspaces, favorites } = await getAllWorkspace();
  console.log("workspace", workspaces);
  console.log("favorites", favorites);

  return (
    <div>
      <WorkspaceForm />
      <aside className="bg-gray-900 text-white w-64 p-4">
        <h2 className="text-lg font-bold mb-4">Workspace</h2>
        <ul className="space-y-2">
          {workspaces.length > 0 ? (
            workspaces.map((workspace) => (
              <li key={workspace.workspaceId} className="p-2 hover:bg-gray-700">
                {workspace.workspaceName}
              </li>
            ))
          ) : (
            <p className="text-gray-400">No workspaces available</p>
          )}
        </ul>

        <h2 className="text-lg font-bold mt-6 mb-4">Favorite</h2>
        <ul className="space-y-2">
          {favorites.length > 0 ? (
            favorites.map((fav) => (
              <li key={fav.workspaceId} className="p-2 hover:bg-gray-700">
                {fav.workspaceName}
              </li>
            ))
          ) : (
            <p className="text-gray-400">No favorites available</p>
          )}
        </ul>
      </aside>
    </div>
  );
}
