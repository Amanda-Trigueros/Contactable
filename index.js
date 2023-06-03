import { login , logout } from "./src/services/session-services.js";
import { createContact, deleteContact, showContact, editContact} from "./src/services/contact-services.js";
import { listContacts } from "./src/services/contact-services.js";
import DOMHandler from "./src/dom-handler.js";
import LoginPage from "./src/pages/login-page.js";

// const credentials = {
// 	email: "test@mail.com",
// 	password: "123456"
// };

const newContact = {
    name: "New Contact 4",
    email: "new_contact@mail.com",
    number: "987654321",
    relation: "Friends",
  };
 
const edit_contact = {
    name: "Camila",
  };

async function init() {
    // try {
    //   const token = sessionStorage.getItem(tokenKey);
    //   if (!token) throw new Error();
      
    //   const user = await getUser();
    //   STORE.user = user;
    //   await STORE.fetchCategories();
    //   DOMHandler.load(HomePage);
    // } catch (error) {
    //   sessionStorage.removeItem(tokenKey);
      DOMHandler.load(LoginPage);
    // }
  }
  
  init();

// async function test(){
//     try {
//         const user = await login(credentials);
//         console.log(user)

        // const user = await showContact(1);
        // console.log(user)
        // const newUser = await createContact(newContact);
        // console.log(newUser)

        // const contactList_1 = await listContacts();
        // console.log(contactList_1)

        // const newUser = await deleteContact(134);
        // console.log(newUser)

        // const newUser = await editContact(137, edit_contact);
        // console.log(newUser)


        // const contactList = await listContacts();
        // console.log(contactList)

        // // const data = await logout();
        // // console.log(data)
        
//     } catch (error) {
//         console.log(error)
//     }
// }


// test();

