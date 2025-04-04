"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { createWorkspaceAction } from "@/actions/workspaceAction";
import { Button } from "./ui/button";

export default function WorkspaceForm() {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Add</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-white rounded-lg shadow-xl border-gray-300">
          <form action={createWorkspaceAction} className="space-y-5 relative">
            <Label className="text-lg">Create New Workspace</Label>
            <Input
              type="text"
              name="workspaceName"
              placeholder="Please type your workspace name"
            />
            <Input
              type="submit"
              className="border-purple-600 text-purple-600 cursor-pointer hover:bg-purple-600 hover:text-white font-bold"
            />
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
