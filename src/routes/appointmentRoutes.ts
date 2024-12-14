import { Router } from "express"
import { createAppointment, getAppointments } from "../controller/appointmentController"

const router = Router()

router.get("/", getAppointments)
router.post("/", createAppointment)

export default router