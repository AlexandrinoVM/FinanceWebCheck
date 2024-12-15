import { Router } from "express";
import { ConsultController } from "../controller/ConsultController";

const consultRouter = Router()

const consultController = new ConsultController()

consultRouter.get('/consult',consultController.getFinanceData)

export default consultRouter
