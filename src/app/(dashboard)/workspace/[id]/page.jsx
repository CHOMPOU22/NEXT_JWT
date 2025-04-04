import React from "react";
import { getAllTasks } from "@/service/taskService";
import CardComponent from "@/components/card";

export default async function Page({ params }) {
  const { id } = await params;
  const tasks = await getAllTasks(id);

  const notStartedTasks = tasks.payload.filter(
    (task) => task.status === "NOT_STARTED"
  );
  const inProgressTasks = tasks.payload.filter(
    (task) => task.status === "IN_PROGRESS"
  );
  const completedTasks = tasks.payload.filter(
    (task) => task.status === "FINISHED"
  );

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-4">NOT STARTED</h3>
        {notStartedTasks.map((task) => (
          <CardComponent key={task.taskId} task={task} />
        ))}
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-4">IN PROGRESS</h3>
        {inProgressTasks.map((task) => (
          <CardComponent key={task.taskId} task={task} />
        ))}
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-4">FINISHED</h3>
        {completedTasks.map((task) => (
          <CardComponent key={task.taskId} task={task} />
        ))}
      </div>
    </div>
  );
}
