import { Router } from 'express';
import { createMessage, getMessageForm } from '../controllers/messageController.js';

const messageRouter = Router();

messageRouter.get('', getMessageForm);
messageRouter.post('', createMessage);

export default messageRouter;