import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";

export default function CardComponent({ task }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="border border-gray-300 rounded-xl mt-8">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">
            {task.taskTitle || "Task Title"}
          </h2>
          <Ellipsis />
        </div>

        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
          {task.taskDetails || "Task Details"}
        </p>

        <div className="flex justify-between items-center mt-4">
          <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
            {task.tag || "DESIGN"}
          </p>

          <div className={`rounded-full w-8 h-8 bg-watermelon-red`} />
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <Select>
          <SelectTrigger
            className={`w-36 truncate border-watermelon-red text-watermelon-red`}
          >
            <SelectValue placeholder={task.status || "NOT_STARTED"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex gap-3 text-light-steel-blue">
          <Clock size={22} />
          <p>{formatDate(task.startDate)}</p>
        </div>
      </div>
    </div>
  );
}
