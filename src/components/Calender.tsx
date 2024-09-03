import {
    Scheduler,
    DayView,
    WeekView,
    Appointments,
    Toolbar,
    ViewSwitcher,
    MonthView,
    Resources,
    AllDayPanel,
    TodayButton,
    DateNavigator,
    AppointmentTooltip,
    ConfirmationDialog,
    AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui'
import {
    ViewState,
    SchedulerDateTime,
    IntegratedEditing,
    EditingState,
} from '@devexpress/dx-react-scheduler'
import { useState } from 'react'
import { initialAppointments, resources } from '../utils/initialValues'
import { useAppointments } from '../utils/useAppointments'

const Calender = () => {
    const [currentDate, setCurrentDate] = useState<SchedulerDateTime>(
        new Date()
    )
    const { appointments, commitChanges } = useAppointments(initialAppointments)

    return (
        <>
            <Scheduler data={appointments}>
                <ViewState
                    currentDate={currentDate}
                    onCurrentDateChange={setCurrentDate}
                />

                <DayView startDayHour={1} endDayHour={24} />
                <WeekView startDayHour={1} endDayHour={24} />
                <MonthView />

                <EditingState onCommitChanges={commitChanges} />
                <IntegratedEditing />

                <Appointments />
                <ConfirmationDialog />
                <AppointmentTooltip showOpenButton showDeleteButton />
                <AppointmentForm />

                <Toolbar />
                <ViewSwitcher />

                <AllDayPanel />
                <DateNavigator />
                <TodayButton />
                <Resources data={resources} />
            </Scheduler>
        </>
    )
}

export default Calender
