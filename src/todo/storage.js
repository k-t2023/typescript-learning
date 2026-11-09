import * as fs from "node:fs";
export function loadTodos(filePath) {
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}
//# sourceMappingURL=storage.js.map