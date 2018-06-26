const user_roles = [
    { title: 'Admin', value: 'admin' },
    { title: 'User', value: 'user' },
    { title: 'Super Admin', value: 'super_admin' },
];
let search_role = (value) => {
    let findUser = user_roles.find(role => value === role.value);
    if(findUser) return findUser;
    return { title: 'User', value: 'user' };
}
export {
    user_roles,
    search_role
}