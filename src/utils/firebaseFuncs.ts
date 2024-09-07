// import {
//     getFirestore,
//     collection,
//     addDoc,
//     doc,
//     updateDoc,
//     deleteDoc,
//     getDocs,
//     onSnapshot,
// } from 'firebase/firestore'
// import app from './firebase'
// import { AppointmentModel } from '@devexpress/dx-react-scheduler'

// // Dodanie wydarzenia
// const addAppointment = async (eventData: AppointmentModel): Promise<void> => {
//     try {
//         const docRef = await addDoc(
//             collection(db, 'schedulerEvents'),
//             eventData
//         )
//         console.log('Event added with ID: ', docRef.id)
//     } catch (e) {
//         console.error('Error adding event: ', e)
//     }
// }

// // Aktualizacja wydarzenia
// const updateAppointment = async (
//     eventId: string,
//     updatedData: Partial<AppointmentModel>
// ): Promise<void> => {
//     try {
//         const eventRef = doc(db, 'schedulerEvents', eventId)
//         await updateDoc(eventRef, updatedData)
//         console.log('Event updated successfully')
//     } catch (e) {
//         console.error('Error updating event: ', e)
//     }
// }

// // Usunięcie wydarzenia
// const deleteAppointment = async (eventId: string): Promise<void> => {
//     try {
//         await deleteDoc(doc(db, 'schedulerEvents', eventId))
//         console.log('Event deleted successfully')
//     } catch (e) {
//         console.error('Error deleting event: ', e)
//     }
// }

// // Pobranie wszystkich wydarzeń
// const getAppointments = async () => {
//     onSnapshot(collection(db, 'schedulerEvents'), (snapshot) => {
//         return snapshot.docs
//     })
// }

// export { addAppointment, updateAppointment, deleteAppointment, getAppointments }
