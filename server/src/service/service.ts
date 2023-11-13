import { getHome } from '../DAL/DAL.js';


const homepage = async () => {
const homePage = await getHome();
return homePage;
};

export { homepage }