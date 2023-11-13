import { getCategories } from '../DAL/DAL.js';


const homepage = async () => {
const homePage = await getCategories();
return homePage;
};

export { homepage }