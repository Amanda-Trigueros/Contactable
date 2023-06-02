import { login , logout } from "./src/services/session-services.js";

const credentials = {
	email: "test@mail.com",
	password: "123456"
};

async function test(){
    try {

        // const user = await login(credentials);
        // console.log(user)


        const data = await logout();
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}

test();

