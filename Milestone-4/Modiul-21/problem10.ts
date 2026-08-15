// একটি variable undefined হলে default value print করো।
// Input:
// username = undefined
// Output:
// Guest

const printUser = (userName :string ="Guest"): string =>{
    return userName
}

console.log(printUser(undefined));