import { Router } from "express";
import { getCargos, getCargosById, postCargo, putCargo, deleteCargo } from "../controllers/cargo.controller";

const cargoRouter = Router();

cargoRouter.get("/", getCargos);
cargoRouter.get("/:id", getCargosById);
cargoRouter.post("/", postCargo);
cargoRouter.put("/:id", putCargo);
cargoRouter.delete("/:id", deleteCargo);

export default cargoRouter;