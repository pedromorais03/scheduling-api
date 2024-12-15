import { Request, Response } from "express"
import { Appointment } from "../models/appointment"
import { addAppointment, getAllAppointments } from  "../services/appointmentService"

export const getAppointments = (req: Request, res: Response) => {
   const appointments = getAllAppointments()
   res.json(appointments)
}

export const createAppointment = (req: Request, res: Response) => {
   // get infos from req.body

   let newAppt: Appointment = ({ id: 1, user: 1, scheduledAt: new Date(), scheduledTo: new Date(), duration: 10, service: 2 })

   res.status(201).json({ message: "Appointment Created"})
}
