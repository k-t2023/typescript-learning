const message: string = "Hello TypeScript!";

//console.log(message);


interface User {
    id: number;
    name: string;
    age: number;
    email?: string;
    isActive: boolean;
}

const user: User = {
    id: 1,
    name: "Taro",
    age: 30,
    isActive: false,
    email: "taro@example.com"
};

function getUserInfo(user: User): string {
    const status = user.isActive ? "有効" : "無効";

    let info = `名前: ${user.name}, 年齢: ${user.age}, ステータス: ${status}`;

    if (user.email) {
        info += `, メールアドレス: ${user.email}`;
    }

    return info;
}

//console.log(getUserInfo(user));


const members: User[]  = [
    {
        id: 1,
        name: "Taro",
        age: 30,
        isActive: true,
        email: "taro@example.com"
    },{
        id: 2,
        name: "Hanako",
        age: 25,
        isActive: false,
        //email: 
    },{
        id: 3,
        name: "Jiro",
        age: 35,
        isActive: true,
        email: ""
    }
];

const str = members.find((user)=> user.id == 99);

if(str){
    console.log(str.name);
} else {
    console.log('ユーザーが見つかりません');
}

type UserStatus = "active" | "inactive";

//getStatusMessage関数
const status:UserStatus = "inactive";
console.log(getStatusMessage(status));
function getStatusMessage(status:UserStatus):string {
    if(status == 'active'){
        return "利用中";
    } else if(status == 'inactive'){
        return "停止中";
    } else {
        return "undefined";
    }
}

//メールアドレスの有無を判定
members.forEach((m) => {
    console.log(getEmail(m));
});

function getEmail(user:User):string{
    if(user.email){
        return user.email;
    } else {
        return "メールアドレス未登録";
    }
}


console.log(members[1]?.email);

//非同期処理
function wait(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function main2(): Promise<void> {
    console.log("ユーザー情報を取得開始");

    await wait(1000);

    console.log("ユーザー情報を取得しました");

    await wait(2000);
    console.log("処理完了");
}

async function fetchUserName(id: number): Promise<string> {
    console.log("ユーザー情報を取得中...");
    await wait(1000);

    const user = members.find((user) => user.id === id);

    if (user) {
        return user.name;
    } else {
        throw new Error("ユーザーが見つかりません");
    }
}

async function main(): Promise<void> {
    try{
        const userName = await fetchUserName(99);
        console.log("取得したユーザー: "+userName);
    }
    catch(error){
        if(error instanceof Error){
            console.log(error.message);
        } else {
            console.log("不明なエラー");
        }
        //console.log("エラーが発生しました");
    }
}

main();