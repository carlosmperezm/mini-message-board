import * as db from "../db/queries.js";
import { body, validationResult } from "express-validator";

export async function getAllMessages(req, res) {
    const rows = await db.getAllMessages();
    res.render("index", { messages: rows })
}
export async function getMessageDetails(req, res) {
    const message = { username: req.params.username, message: req.params.message, date: req.params.date };
    res.render('messageDetails', { message });
}
export async function getMessageForm(req, res) {
    res.render("messageForm");
}


const EMPTY_ERROR_MSG = "cannot be empty";
const validateMessage = [
    body("message").trim().notEmpty().withMessage(`Message ${EMPTY_ERROR_MSG}`),
    body("username").trim().notEmpty().withMessage(`Username ${EMPTY_ERROR_MSG}`),
]
export const createMessage = [
    validateMessage,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("partials/errors", { errors: errors.array() });
        }
        const newMessage = {
            message: req.body.message,
            username: req.body.username,
        };
        await db.saveMessage(newMessage);
        res.redirect('/');
    },

];