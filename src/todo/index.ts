import * as fs from "node:fs";
import type { Todo } from "./types.js";
import { loadTodos, saveTodos } from "./storage.js";

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
    saveTodos("todos.json", todos);

    console.log(`Todoを追加しました: ${title}`);
}

//一覧表示
function showTodos(): void {
    if (todos.length === 0) {
        console.log("Todoはありません");
        return;
    }
    todos.forEach((todo) => {
        const status = todo.completed ? "完了" : "未完了";
        console.log(`${todo.id}: ${todo.title} [${status}] `);
    });
    console.log(`合計: ${todos.length}件`);

    const incompleteCount = todos.filter((todo) => !todo.completed).length;
    console.log(`未完了: ${incompleteCount}件`);

    const completedCount = todos.filter((todo) => todo.completed).length;
    console.log(`完了: ${completedCount}件`);
}

function completeTodo(id: number): void {
    const todo = todos.find((todo) => todo.id === id);
    if(todo){
        todo.completed = true;
        saveTodos("todos.json", todos);
        console.log(`Todoを完了しました: ${todo.title}`);
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
    
if(command === "add"){
    if(title && title.trim() !== ""){
        addTodo(title);
    } else {
        console.log("エラー: Todoの内容を入力してください");
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
} else if (command === "help") {
        showHelp();    
} else {
    console.log("不明なコマンドです");
    showHelp();
}


function deleteTodo(id: number): void {
    const result = todos.filter(todo => todo.id !== id);
    if(todos.length !== result.length){
        todos = result;
        saveTodos("todos.json", todos);
        console.log(`Todoを削除しました: ID ${id}`)
    } else {
        console.log("タスクが見つかりません");
    }
}

function showHelp(): void {
  console.log("Todo CLIの使い方:");
  console.log("  add <タイトル>  Todoを追加");
  console.log("  list           Todo一覧を表示");
  console.log("  complete <ID>  Todoを完了");
  console.log("  delete <ID>    Todoを削除");
  console.log("  help           使い方を表示");
}