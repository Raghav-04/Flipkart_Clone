import mongoose from "mongoose";




const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerceweb.4qvby.mongodb.net/PROJECT0?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {});
        console.log('Database connect Successfully.');
    } catch(error)
    {
        console.log('Error: ',error.message);
    }
}

export default Connection;