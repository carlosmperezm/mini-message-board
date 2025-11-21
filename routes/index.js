import { Router } from "express";
import { getAllMessages, getMessageDetails } from "../controllers/messageController.js";

const appRouter = Router();
appRouter.get('/', getAllMessages);

appRouter.get('/details/:username/:message/:date', getMessageDetails);

export default appRouter;