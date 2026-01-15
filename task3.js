// Task 3: addUser(first_name, last_name, email)
import { listUsers } from "./task2.js";
import { getServerURL } from "./task1.js";

export async function addUser(first_name, last_name, email) {
    const users = await listUsers();
    const newId = (Math.max(...users.map(user => user.id || 0)) + 1).toString();

    await fetch(getServerURL() + "/users", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                id: newId,
                first_name: first_name,
                last_name: last_name,
                email: email
            }
        ),
    })
}
      
