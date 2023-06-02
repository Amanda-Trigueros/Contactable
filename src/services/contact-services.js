import { BASE_URI } from "../config.js";
import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";


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

export async function editContact(id, info_contact = {name, email, number, relation}) {
  return await apiFetch(`contacts/${id}`, { method: "PATCH", body: info_contact });
}

export async function listContacts() {
  return await apiFetch(`contacts`, { method: "GET" });
}
