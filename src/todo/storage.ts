import * as fs from "node:fs";
import type { Todo } from "./types.js";

export function loadTodos(filePath: string): Todo[] {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data) as Todo[];
}

export function saveTodos(
  filePath: string,
  todos: Todo[]
): void {
  const json = JSON.stringify(todos);
  fs.writeFileSync(filePath, json, "utf-8");
}