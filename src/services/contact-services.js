import { BASE_URI } from "../config.js";
import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";

newContact = {
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
  return await apiFetch(`contact/${id}`, { method: "DELETE" });
}

export async function showContact(id) {
  return await apiFetch(`contact/${id}`, { method: "GET" });
}

export async function editContact(id) {
  return await apiFetch(`contact/${id}`, { method: "PATCH" });
}

// export async function editContact(id) {
//   return await apiFetch(`contact/${id}`, { method: "PATCH" });
// }
