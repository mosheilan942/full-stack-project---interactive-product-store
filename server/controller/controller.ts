import userService from '../service/service';


const getUsers = (req, res) => {
const users = userService.getUsers();
res.json(users);
};

module.exports = {getUsers}