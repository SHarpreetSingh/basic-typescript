var Role;
(function (Role) {
    Role[Role["USER"] = 1] = "USER";
    Role[Role["ADMIN"] = 2] = "ADMIN";
})(Role || (Role = {}));
var obj = {
    name: "aman",
    role: Role.USER
};
// console.log(person.role);
