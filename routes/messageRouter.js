import { Router } from 'express';
import { messages } from './index.js';

const messageRouter = Router();

messageRouter.get('', (req, res) => res.render('messageForm'));
messageRouter.post('', (req, res) => {
    const newMessage = {
        text: req.body.message,
        user: req.body.username,
        added: new Date(),
    };
    messages.push(newMessage);
    res.redirect('/');
});

export default messageRouter;