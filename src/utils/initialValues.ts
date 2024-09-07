import { AppointmentModel } from '@devexpress/dx-react-scheduler'

export const INITIAL_APPO: Array<AppointmentModel> = [
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

export const RESOURCES = [
    {
        fieldName: 'type',
        title: 'Type',
        instances: [
            { id: 'private', text: 'Prywatne', color: '#EC407A' },
            { id: 'work', text: 'Praca', color: '#7E57C2' },
            { id: 'meeting', text: 'Spotkanie', color: '#42A5F5' },
            { id: 'holiday', text: 'Wakacje', color: '#66BB6A' },
            { id: 'birthday', text: 'Urodziny', color: '#FFCA28' },
            { id: 'appointment', text: 'Wizyta', color: '#FF7043' },
            { id: 'exercise', text: 'Ćwiczenia', color: '#8D6E63' },
        ],
    },
]

export const INITIAL_START_VALUE = 6
export const INITIAL_END_VALUE = 24

export const SCHEDULER_MESSAGES = {
    'pl-PL': {
        allDay: 'Cały dzień',
        today: 'DZISIAJ',
        allDayLabel: 'Cały dzień',
        titleLabel: 'Tytuł',
        commitCommand: 'Zapisz',
        moreInformationLabel: 'Więcej informacji',
        repeatLabel: 'Powtarzaj',
        notesLabel: 'Notatki',
        never: 'Nigdy',
        daily: 'Codziennie',
        weekly: 'Co tydzień',
        monthly: 'Co miesiąc',
        yearly: 'Co roku',
        repeatEveryLabel: 'Powtarzaj co',
        daysLabel: 'dni',
        endRepeatLabel: 'Zakończ powtarzanie',
        onLabel: 'W dniu',
        afterLabel: 'Po',
        occurrencesLabel: 'Wystąpieniach',
        weeksOnLabel: 'tygodni w:',
        monthsLabel: 'miesięcy',
        ofEveryMonthLabel: 'w każdym miesiącu',
        theLabel: 'W',
        firstLabel: 'Pierwszy',
        secondLabel: 'Drugi',
        thirdLabel: 'Trzeci',
        fourthLabel: 'Czwarty',
        lastLabel: 'Ostatni',
        yearsLabel: 'lat',
        ofLabel: 'z',
        everyLabel: 'Każdy',
        detailsLabel: 'Szczegóły',
    },
    'en-US': {
        allDay: 'All Day',
        today: 'TODAY',
    },
}
