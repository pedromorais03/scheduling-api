import { Appointment } from "../models/appointment"

let appointments: Appointment[] = []

export const getAllAppointments = (): Appointment[] => {
   return appointments
}

// Adicionar um novo agendamento
export const addAppointment = (appointment: Omit<Appointment, "id">): Appointment => {
   const newAppointment: Appointment = {
      id: appointments.length + 1,
      ...appointment,
   }

   return newAppointment
}
