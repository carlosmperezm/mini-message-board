import { Router } from "express";

const appRouter = Router();
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];


appRouter.get('', (req, res) => res.render('index', { messages }));

export default appRouter;