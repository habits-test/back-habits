import { Request, Response } from "express";
import Habit from "../models/habit";

async function getHabits(req: Request, res: Response) {
  try {
    const { user } = req.body;
    const habits = await Habit.findAll({
      where: {
        UserId: user.id,
      },
    });
    res.json({ habits: habits });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

async function createHabit(req: Request, res: Response) {
  try {
    const { name, time, user } = req.body;
    const habit = await Habit.create({ name, time, UserId: user.id });
    res.json({ habit: habit });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

export { createHabit, getHabits };
