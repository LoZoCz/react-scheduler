import { doc, deleteDoc } from 'firebase/firestore'
import db from './firebase'

const deleteAppointment = async (appointmentId: string) => {
    try {
        const docRef = doc(db, 'schedulerEvents', appointmentId)
        await deleteDoc(docRef).catch((error) => {
            console.error('Error deleting appointment:', error)
            alert('Failed to delete appointment. Please try again later.')
        })
    } catch (error) {
        console.error('Error removing document:', error)
    }
}

export default deleteAppointment
