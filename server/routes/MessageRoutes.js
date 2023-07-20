import {Router} from "express";
import { addMessage, getMessage } from "../controllers/MessageController";

const router=Router();

router.post("/add-message",addMessage);
router.get("/get-messages/:from/:to",getMessages);


export default router;