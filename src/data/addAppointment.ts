import { addDoc, collection } from 'firebase/firestore'
import db from './firebase'
import { AppointmentModel } from '@devexpress/dx-react-scheduler'

const addAppointment = async (appointment: AppointmentModel) => {
    try {
        await addDoc(collection(db, 'schedulerEvents'), appointment).catch(
            (error) => {
                console.error('Error adding appointment:', error)
                alert(
                    'Failed to add appointment. Please check the form fields.'
                )
            }
        )
    } catch (e) {
        console.error('Error adding document:', e)
    }
}

export default addAppointment
