import * as fs from "node:fs";
export function loadTodos(filePath) {
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}
export function saveTodos(filePath, todos) {
    const json = JSON.stringify(todos);
    fs.writeFileSync(filePath, json, "utf-8");
}
//# sourceMappingURL=storage.js.map