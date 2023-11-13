import { getHome } from '../DAL/DAL';


const homepage = async () => {
const homePage = await getHome();
return homePage;
};

export { homepage }