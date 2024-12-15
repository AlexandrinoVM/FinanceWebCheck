import { Router } from "express";
import { CostController } from "../controller/CostController";

const costRouter = Router()

const costController = new CostController()

costRouter.post('/calc',costController.calcTotalCosts)

export default  costRouter



