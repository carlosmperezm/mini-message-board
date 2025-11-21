import * as db from "../db/queries.js";

export async function getAllMessages(req, res) {
    const rows = await db.getAllMessages();
    res.render("index", { messages: rows })
}
export async function createMessage(req, res) {
    const newMessage = {
        message: req.body.message,
        username: req.body.username,
    };
    await db.saveMessage(newMessage);
    res.redirect('/');
}
export async function getMessageDetails(req, res) {
    const message = { username: req.params.username, message: req.params.message, date: req.params.date };
    res.render('messageDetails', { message });
}
export async function getMessageForm(req, res) {
    res.render("messageForm");
}