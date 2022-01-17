import User from "../mvcmodel/userSchema.js";

export const userSignup = async (request, response)  => {
    
    try {
        const exist = await User.findOne({ username: request.body.username});
        if(exist){
            return response.status(401).json('Username already exist');
        }
        const user = request.body;
        const newUser =  new User(user);
        await newUser.save();

        response.status(200).json('User is Successfully registered');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export const userLoginIn = async (request, response)  => {
    
    try {
        let user = await User.findOne({ username: request.body.username, password:request.body.password});
        if(user)
        {
            return response.status(200).json(`${request.body.username} Login Successful`);
        }
        else{
            return response.status(401).json('Invalid Username or Password');
        }
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}