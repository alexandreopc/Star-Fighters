import { Request, Response } from "express";
import axios from "axios";

import { rankingServices } from "../services/rankingServices.js";

export async function postBattle(req: Request, res: Response) {
  const { firstUser, secondUser }: { firstUser: string; secondUser: string } =
    req.body;

  if (!firstUser || !secondUser) return res.sendStatus(404);

  const battleResult = await rankingServices.getBattleResult(
    firstUser,
    secondUser
  );
  res.send(battleResult);
}

export async function getRanking(req: Request, res: Response) {
  res.send("foi");
}
