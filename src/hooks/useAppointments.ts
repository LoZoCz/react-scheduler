import { useEffect, useState } from 'react'
import { AppointmentModel, ChangeSet } from '@devexpress/dx-react-scheduler'
import getAppointments from '../data/getAppointments'
import addAppointment from '../data/addAppointment'
import editAppointment from '../data/editAppointment'
import deleteAppointment from '../data/deleteAppointment'

const isValidAppointment = (appointment: AppointmentModel) => {
    const hasStartDate = appointment.startDate instanceof Date
    const hasTitle =
        typeof appointment.title === 'string' && appointment.title.trim() !== ''

    if (!hasStartDate || !hasTitle) return false

    if (appointment.endDate && appointment.startDate >= appointment.endDate)
        return false

    return true
}

export const useAppointments = () => {
    const [appointments, setAppointments] = useState<AppointmentModel[] | null>(
        null
    )

    useEffect(() => {
        const stopListening = getAppointments((data) => {
            setAppointments(data)
        })

        return () => stopListening()
    }, [])

    const commitChanges = ({ added, changed, deleted }: ChangeSet) => {
        if (added) {
            const newAppointment = {
                ...added,
            } as AppointmentModel

            if (isValidAppointment(newAppointment)) {
                addAppointment(newAppointment)
            } else {
                alert(
                    'You need to fill all required fields (start and end date and appointment title)'
                )
            }
        }

        if (changed) {
            Object.keys(changed).forEach((id) => {
                const changes = changed[id]
                const currentAppointment = appointments?.find(
                    (appt) => appt.id === id
                )

                if (currentAppointment) {
                    editAppointment(id, changes)
                }
            })
        }

        if (deleted !== undefined) {
            deleteAppointment(deleted)
        }
    }

    return { appointments, commitChanges }
}
