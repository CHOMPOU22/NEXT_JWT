import { getAllWorkspace } from "@/service/workspaceService";
import WorkspaceForm from "./WorkspaceForm";
import Link from "next/link";

export default async function Sidebar() {
  const { workspaces, favorites } = await getAllWorkspace();

  return (
    <div>
      <WorkspaceForm />
      <aside className="bg-gray-900 text-white w-64 p-4">
        <h2 className="text-lg font-bold mb-4">Workspace</h2>
        <ul className="space-y-2">
          {workspaces.length > 0 ? (
            workspaces.map((workspace) => {
              const workspaceLink = `/workspace/${workspace.workspaceId}`;
              return (
                <Link href={workspaceLink} key={workspace.workspaceId}>
                  <li className="p-2 hover:bg-gray-700">
                    {workspace.workspaceName}
                  </li>
                </Link>
              );
            })
          ) : (
            <p className="text-gray-400">No workspaces available</p>
          )}
        </ul>

        <h2 className="text-lg font-bold mt-6 mb-4">Favorite</h2>
        <ul className="space-y-2">
          {favorites.length > 0 ? (
            favorites.map((fav) => {
              const favLink = `/workspace/${fav.workspaceId}`;
              return (
                <Link href={favLink} key={fav.workspaceId}>
                  <li className="p-2 hover:bg-gray-700">{fav.workspaceName}</li>
                </Link>
              );
            })
          ) : (
            <p className="text-gray-400">No favorites available</p>
          )}
        </ul>
      </aside>
    </div>
  );
}
