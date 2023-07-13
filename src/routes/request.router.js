import express from "express"
import RequestController from "../controllers/request.controller.js"

const router = express.Router()

router.get('/randomadvice', RequestController.getRandomAdvice);

export { router };