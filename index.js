import { login , logout } from "./src/services/session-services.js";
import { showContact } from "./src/services/contact-services.js";
import { listContacts } from "./src/services/contact-services.js";

// import DOMHandler from "./src/dom-handler.js";

const credentials = {
	email: "test@mail.com",
	password: "123456"
};

// async function init() {
//     try {
//       const token = sessionStorage.getItem(tokenKey);
//       if (!token) throw new Error();
      
//       const user = await getUser();
//       STORE.user = user;
//       await STORE.fetchCategories();
//       DOMHandler.load(HomePage);
//     } catch (error) {
//       sessionStorage.removeItem(tokenKey);
//       DOMHandler.load(LoginPage);
//     }
//   }
  
//   init();

async function test(){
    try {
        const data = await login(credentials);
        console.log(data)

        // const user = await showContact(1);
        // console.log(user)

        const user = await listContacts();
        console.log(user)

        // // const data = await logout();
        // // console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}


test();

