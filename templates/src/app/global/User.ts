const user_roles = [
    { title: 'Admin', value: 'admin' },
    { title: 'User', value: 'user' },
    { title: 'Super Admin', value: 'super_admin' },
];
let search_role = (value) => {
    return user_roles.find(role => value === role.value);
}
export {
    user_roles,
    search_role
}