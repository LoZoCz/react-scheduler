import { AppointmentModel } from '@devexpress/dx-react-scheduler'

export const initialAppointments: Array<AppointmentModel> = [
    {
        id: crypto.randomUUID(),
        startDate: '2024-09-01T10:00',
        endDate: '2024-09-01T15:00',
        title: 'Meeting',
        type: 'private',
        allDay: false,
    },
    {
        id: crypto.randomUUID(),
        startDate: '2024-09-02T12:30',
        endDate: '2024-09-02T14:00',
        title: 'Go to a gym',
        type: 'work',
        allDay: false,
    },
    {
        id: crypto.randomUUID(),
        startDate: '2024-09-03T12:30',
        title: 'Check mails',
        type: 'work',
        notes: 'hello',
        allDay: true,
    },
]

export const resources = [
    {
        fieldName: 'type',
        title: 'Type',
        instances: [
            { id: 'private', text: 'Private', color: '#EC407A' },
            { id: 'work', text: 'Work', color: '#7E57C2' },
        ],
    },
]
