import { doc, updateDoc } from 'firebase/firestore'
import db from './firebase'
import { AppointmentModel } from '@devexpress/dx-react-scheduler'

const editAppointment = async (
    id: string,
    updatedData: Partial<AppointmentModel>
) => {
    try {
        const docRef = doc(db, 'schedulerEvents', id)
        await updateDoc(docRef, updatedData).catch((error) => {
            console.error('Error updating appointment:', error)
            alert('Failed to update appointment. Please try again later.')
        })
    } catch (e) {
        console.error('Error updating document:', e)
    }
}

export default editAppointment
