// Task 2: listUsers()
import { getServerURL } from "./task1.js";

export async function listUsers() {
    return fetch(getServerURL() + "/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        });
}