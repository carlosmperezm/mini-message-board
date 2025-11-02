import { Router } from "express";

const appRouter = Router();
export const messages = [
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
appRouter.get('/', (req, res) => res.render('index', { messages }));
// 
appRouter.get('/details/:user/:text/:added', (req, res) => {
    const message = { user: req.params.user, text: req.params.text, added: req.params.added };
    res.render('messageDetails', { message });
});

export default appRouter;