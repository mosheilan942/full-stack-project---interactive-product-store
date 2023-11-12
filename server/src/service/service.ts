import { getHome } from '../DAL/DAL.js';


const homepage = () => {
const homePage = getHome();
return homePage;
};

export { homepage }