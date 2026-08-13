function calculateSalaryHike(employees) {

    if (typeof employees !== "object" || Array.isArray(employees) || employees === null) return "Invalid"

    if(typeof employees.name !== "string" || employees.name.trim() === "" || typeof employees.salary !== "number" || employees.salary <=0 || Number.isNaN(employees.salary) || typeof employees.rating !=="string" || employees.rating.trim() === "") return "Invalid"

    let name = employees.name
    let finalSalary = employees.salary

    if(employees.rating === "A"){
        finalSalary = employees.salary + (employees.salary * 0.15)
        name = name.toUpperCase()
    } else if (employees.rating === "B"){
        finalSalary = employees.salary + (employees.salary * 0.1)
        name = name.toUpperCase()
    } else if (employees.rating === "C"){
        finalSalary = employees.salary + (employees.salary *0.05)
        name = name.toUpperCase()
    } else{
        name = name.toUpperCase()
    }

    return {
        name,
        finalSalary
    }
}

console.log(calculateSalaryHike({ name: "Tanvir", salary: 57000, rating: "A" }));