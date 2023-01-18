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

async function updateHabitProgress(req: Request, res: Response) {
  try {
    const { progress } = req.body;

    const { id } = req.params;
    const habit = await Habit.findByPk(id);
    if (habit) {
      habit.set({
        progress: progress,
      });
      await habit.save();
      return res.sendStatus(200);
    }

    res.sendStatus(404);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

export { createHabit, getHabits, updateHabitProgress };
