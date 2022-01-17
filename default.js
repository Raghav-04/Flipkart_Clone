import { products } from "./constants/product.js";
import Productchecked from "./mvcmodel/productSchema.js";

const DefaultData = async () => {
    try {
        await Productchecked.deleteMany({});
        await Productchecked.insertMany(products);
        console.log('Data imported Successfully.');

    } catch(error)  {
        console.log('Error:',error.message);
    }

}

export default DefaultData;