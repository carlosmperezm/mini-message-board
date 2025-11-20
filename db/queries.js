import pool from "./pool.js";

export async function getAllMessages() {
    const result = await pool.query("SELECT * FROM messages");
    return result.rows;
}
export async function getMessages(substring) {
    const result = await pool.query("SELECT * FROM messages WHERE message LIKE $1", [`%${substring}%`]);
    return result.rows;
}
export async function getUsers(usernameSubstring) {
    const result = await pool.query("SELECT * FROM messages WHERE username LIKE $1", [`%${usernameSubstring}%`]);
    return result.rows;
}