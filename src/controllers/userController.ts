import { Request, Response } from "express";
import { CreateNewUserService } from "../services/createNewUserService";
import { DeleteUserService } from "../services/deleteUserService";
import { EditUserService } from "../services/editUserService";
import { GetAllUsersService } from "../services/getAllUsersService";

class userController {
  constructor() {}

  async get(req: Request, res: Response): Promise<Response> {
    try {
      const users = await GetAllUsersService();

      return res.status(200).send({ users });
    } catch (err) {
      return res.json({ error: "unknown error" });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, dob, address, description } = req.body;

    try {
      const userCreated = await CreateNewUserService({
        name,
        dob,
        address,
        description,
      });

      return res.status(200).send({ userCreated });
    } catch (err) {
      if (err == "Error: Insuficient arguments") {
        return res
          .status(422)
          .send({ error: String(err).replace("Error: ", "") });
      }

      console.log(err);
      return res.status(500).send({ error: "unknown error" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const userDeleted = await DeleteUserService(id);

      return res.status(200).send({ userDeleted });
    } catch (err) {
      return res.status(500).send({ error: "unknown error" });
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, dob, address, description } = req.body;

    try {
      const userEdited = await EditUserService(id, {
        name,
        dob,
        address,
        description,
      });

      return res.status(200).send({ userEdited });
    } catch (err) {
      if (err == "Error: Insuficient arguments") {
        return res
          .status(422)
          .send({ error: String(err).replace("Error: ", "") });
      }

      return res.status(500).send({ error: "unknown error" });
    }
  }
}

export const UserController = new userController();
