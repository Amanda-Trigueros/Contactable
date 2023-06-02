import { BASE_URI } from "../config.js";
import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";

const newContact = {
  name: "New Contact 4",
  email: "new_contact@mail.com",
  number: "987654321",
  relation: "Friends",
};

export async function createContact(
  newContact = { name, email, number, relation }
) {
  return await apiFetch("contacts", { body: newContact });
}

export async function deleteContact(id) {
  return  await apiFetch(`contacts/${id}`, { method: "DELETE"});
}

export async function showContact(id) {
   const show =  await apiFetch(`contacts/${id}`, { method: "GET"});
   return show
}

export async function editContact(id) {
  return await apiFetch(`contacts/${id}`, { method: "PATCH" });
}

export async function listContacts() {
  return await apiFetch(`contacts`, { method: "GET" });
}
