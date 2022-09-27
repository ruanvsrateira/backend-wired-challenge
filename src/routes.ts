import { Router } from "express";
import { UserController } from "./controllers/userController";
import { UserExistMiddleware } from "./middlewares/userExistMiddleware";

const routes = Router();

routes.get("/users", UserController.get);
routes.post("/user", UserController.create);
routes.delete("/user/:id/delete", UserExistMiddleware, UserController.delete);
routes.put("/user/:id/edit", UserExistMiddleware, UserController.edit);

export { routes };
