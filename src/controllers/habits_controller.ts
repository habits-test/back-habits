import { Request, Response } from "express";
import Habit from "../models/habit";

async function createHabit(req: Request, res: Response) {
  try {
    const { name, time, user } = req.body;
    await Habit.create({ name, time, UserId: user.id });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

export { createHabit };
