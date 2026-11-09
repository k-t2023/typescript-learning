const message = "Hello TypeScript!";
const user = {
    id: 1,
    name: "Taro",
    age: 30,
    isActive: false,
    email: "taro@example.com"
};
function getUserInfo(user) {
    const status = user.isActive ? "有効" : "無効";
    let info = `名前: ${user.name}, 年齢: ${user.age}, ステータス: ${status}`;
    if (user.email) {
        info += `, メールアドレス: ${user.email}`;
    }
    return info;
}
//console.log(getUserInfo(user));
const members = [
    {
        id: 1,
        name: "Taro",
        age: 30,
        isActive: true,
        email: "taro@example.com"
    }, {
        id: 2,
        name: "Hanako",
        age: 25,
        isActive: false,
        //email: 
    }, {
        id: 3,
        name: "Jiro",
        age: 35,
        isActive: true,
        email: ""
    }
];
// 偶数だけを抽出
/*const member = members.filter((user) => user.isActive === true);


member.forEach((m) => {
    console.log(m.name);
});*/
//const names = members.map((user) => user.name);
//console.log(names);
//const member = members.filter((user) => user.isActive === true);
//const activeNames = member.map((user) => user.name);
/*const activeNames = members
  .filter((user) => user.isActive === true)
  .map((user) => user.name);

console.log(activeNames);*/
const str = members.find((user) => user.id == 99);
if (str) {
    console.log(str.name);
}
else {
    console.log('ユーザーが見つかりません');
}
/*const status:UserStatus = "active";
console.log(status);

interface Account {
    id:number,
    name:string,
    status:UserStatus
}

const account: Account = {
    id: 1,
    name: "Taro",
    status: "active"
};

console.log(account.status);*/
//getStatusMessage関数
const status = "inactive";
console.log(getStatusMessage(status));
function getStatusMessage(status) {
    if (status == 'active') {
        return "利用中";
    }
    else if (status == 'inactive') {
        return "停止中";
    }
    else {
        return "undefined";
    }
}
//メールアドレスの有無を判定
members.forEach((m) => {
    console.log(getEmail(m));
});
function getEmail(user) {
    if (user.email) {
        return user.email;
    }
    else {
        return "メールアドレス未登録";
    }
}
console.log(members[1]?.email);
//非同期処理
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
async function main2() {
    console.log("ユーザー情報を取得開始");
    await wait(1000);
    console.log("ユーザー情報を取得しました");
    await wait(2000);
    console.log("処理完了");
}
//main2();
async function fetchUserName() {
    console.log("ユーザー情報を取得中...");
    await wait(1000);
    throw new Error("ユーザー取得に失敗しました");
}
async function main() {
    try {
        const userName = await fetchUserName();
        console.log("取得したユーザー: " + userName);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        else {
            console.log("不明なエラー");
        }
        //console.log("エラーが発生しました");
    }
}
main();
export {};
//# sourceMappingURL=index.js.map