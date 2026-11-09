import * as fs from "node:fs";
import type { Todo } from "./types.js";
import { loadTodos } from "./storage.js";

/*interface Todo {
  id: number;
  title: string;
  completed: boolean;
}*/

let todos: Todo[] = loadTodos("todos.json");

//タスク追加
function addTodo(title: string): void {
    //ID
    const ids = todos.map((todo) => todo.id);
    let newId = Math.max(0, ...ids);
    newId += 1;
    //追加データを作成
    const newTodo: Todo = {
        id: newId,
        title: title,
        completed: false 
    };

    //配列に追加
    todos.push(newTodo);
    saveTodos();
}

//一覧表示
function showTodos(): void {
    todos.forEach((todo) => {
        const status = todo.completed ? "完了" : "未完了";
        console.log(`${todo.id}: ${todo.title} [${status}] `);
    });
}

function completeTodo(id: number): void {
    const todo = todos.find((todo) => todo.id === id);
    if(todo){
        todo.completed = true;
        saveTodos();
    } else {
        console.log("タスクが見つかりません");
    }
}

/*
addTodo("TypeScriptを勉強する");
addTodo("GitHubを学ぶ");
completeTodo(1);
showTodos();
completeTodo(99);
*/


// ==========================================
// process.argv を使ったコマンドライン引数の処理
// ==========================================
const command = process.argv[2];
const title = process.argv[3];

//console.log(command);
//console.log(title);
    
// ==========================================
// JSONファイルへの書き込み
// ==========================================
function saveTodos(): void {
    const json = JSON.stringify(todos);

    fs.writeFileSync("todos.json", json, "utf-8");
}


if(command === "add"){
    if(title){
        addTodo(title);
    } else {
        console.log("タスク名を指定してください");
    }
} else if(command === "list"){    
    showTodos();
} else if(command === "complete"){
    const id = Number(title);
    if (Number.isInteger(id) && id > 0) {
        completeTodo(id);
    } else {
        console.log("正しいIDを指定してください");
    }
} else if(command === "delete"){  
    const id = Number(title);
    if (Number.isInteger(id) && id > 0) {
        deleteTodo(id);
    } else {
        console.log("正しいIDを指定してください");
    }
} else {
    console.log("不明なコマンドです");
}


function deleteTodo(id: number): void {
    const result = todos.filter(todo => todo.id !== id);
    if(todos.length !== result.length){
        todos = result;
        saveTodos();
    } else {
        console.log("タスクが見つかりません");
    }
}