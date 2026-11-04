# TypeScript Todo CLI

## 概要

Node.jsとTypeScriptを使用して作成した、コマンドラインで操作できるTodo管理アプリです。
ターミナルからTodoの追加・一覧表示・完了・削除ができます。
TodoのデータはJSONファイルに保存されるため、プログラムを終了してもデータが保持されます。

## 機能

- Todoの追加
- Todoの一覧表示
- Todoの完了状態の更新
- Todoの削除
- JSONファイルへのデータ保存・読み込み

## 使い方
1. Todoの追加（add）
```bash
npx tsx src/todo/index.ts add "買い物に行く"
```
2. Todoの一覧表示（list）
```bash
npx tsx src/todo/index.ts list
```
3. Todoの完了（complete）
```bash
npx tsx src/todo/index.ts complete 1
```
4. Todoの削除（delete）
```bash
npx tsx src/todo/index.ts delete 2
```