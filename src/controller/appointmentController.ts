import { Request, Response } from "express"
import { Appointment } from "../models/appointment"
import { addAppointment, getAllAppointments } from  "../services/appointmentService"

export const getAppointments = (req: Request, res: Response) => {
   const appointments = getAllAppointments()
   res.json(appointments)
}

export const createAppointment = (req: Request, res: Response) => {
   // get infos from req.body

   res.status(201).json({ message: "Appointment Created"})
}
