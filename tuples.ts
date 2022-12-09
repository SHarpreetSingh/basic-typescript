
const user: {
    name: string,
    role: [number, string]
} = {
    name: "aman",
    role: [2, 'author']
}

user.role.push(3);
// user.role = [1,"ama",3];
console.log(user.role);