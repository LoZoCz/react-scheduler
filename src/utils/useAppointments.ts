import { useState } from 'react'
import { AppointmentModel, ChangeSet } from '@devexpress/dx-react-scheduler'

const isValidAppointment = (appointment: AppointmentModel) => {
    return (
        typeof appointment.startDate === 'string' &&
        typeof appointment.endDate === 'string' &&
        typeof appointment.title === 'string' &&
        typeof appointment.type === 'string'
    )
}

export const useAppointments = (
    initialAppointments: Array<AppointmentModel>
) => {
    const [appointments, setAppointments] =
        useState<Array<AppointmentModel>>(initialAppointments)

    const commitChanges = ({ added, changed, deleted }: ChangeSet) => {
        setAppointments((prevAppointments) => {
            let updatedAppointments = [...prevAppointments]

            if (added) {
                const newAppointment = {
                    id: crypto.randomUUID(),
                    ...added,
                } as AppointmentModel

                if (isValidAppointment(newAppointment)) {
                    updatedAppointments.push(newAppointment)
                } else {
                    console.error('Invalid appointment:', newAppointment)
                }
            }

            if (changed) {
                updatedAppointments = prevAppointments.map((appointment) => {
                    const appointmentID = appointment.id as string
                    const changes = changed[appointmentID]

                    if (changes) {
                        return { ...appointment, ...changes }
                    } else {
                        return appointment
                    }
                })
            }

            if (deleted !== undefined) {
                updatedAppointments = prevAppointments.filter(
                    (appointment) => appointment.id !== deleted
                )
            }
            return updatedAppointments
        })
    }

    return { appointments, commitChanges }
}
