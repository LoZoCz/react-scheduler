import { collection, onSnapshot } from 'firebase/firestore'
import db from './firebase'
import { AppointmentModel } from '@devexpress/dx-react-scheduler'
import convertFromUnix from '../utils/convertFromUnix'

const getAppointments = (callback: (data: AppointmentModel[]) => void) => {
    const query = onSnapshot(collection(db, 'schedulerEvents'), (snapshot) => {
        const appointments = snapshot.docs.map((doc) => {
            return {
                ...doc.data(),
                startDate: convertFromUnix(doc.data().startDate),
                endDate: convertFromUnix(doc.data().endDate),
                id: doc.id,
            } as AppointmentModel
        })
        callback(appointments)
    })

    return query
}

export default getAppointments
