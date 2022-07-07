import { Router } from "express";
import { postBattle, getRanking } from "../controllers/controller.js";

const router = Router();

router.post("/battle", postBattle);
router.get("/ranking", getRanking);

export default router;
