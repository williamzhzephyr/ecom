import { Request, Response } from "express";

export const welcome = (req: Request, res: Response) => {
    res.status(200).send("Welcome to the website");
}

