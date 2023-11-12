import userService from '../service/service';


const getHomePage = (req, res) => {
const homePage = userService.getHomePage();
res.json(homePage);
};

export {getHomePage}