function makeName(firstName: string, lastName: string, middleName?: string): string {
    if (middleName) return firstName + " " + middleName + " " + lastName
    return firstName + " " + lastName
}

const fullName = makeName("Akshay", "Shriram", "Shrinivaas")
console.log(fullName;

function callBackFunc(func: (f: string, l: string, m?: string) => string, param1: string, param2: string) {
    func(param1, param2)
}
callBackFunc(makeName, "Akshay", "Shriram")

