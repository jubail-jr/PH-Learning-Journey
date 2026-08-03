const describeDeclaration = keyWords => {
    if (keyWords === "var"){
        return `Can redeclare, can reassign`
    } else if (keyWords === "let"){
        return `Cannot Redeclare, can reassign`
    } else if (keyWords === "const") {
        return `Cannot Redeclare, Cannot Reassign`
    } else {
        return `invalid`
    }
}

console.log(describeDeclaration("let"));
console.log(describeDeclaration("var"));
console.log(describeDeclaration("const"));
console.log(describeDeclaration("int"));
