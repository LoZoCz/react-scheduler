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
import {
    INITIAL_END_VALUE,
    INITIAL_START_VALUE,
    RESOURCES,
    SCHEDULER_MESSAGES,
} from '../utils/initialValues'
import { useAppointments } from '../hooks/useAppointments'
import { DayTimeLabel, WeekTimeLabel } from './TimeLabel'

const Calender = () => {
    const [currentDate, setCurrentDate] = useState<SchedulerDateTime>(
        new Date()
    )
    const { appointments, commitChanges } = useAppointments()

    return (
        <>
            <Scheduler data={appointments || []} locale="pl-PL">
                <ViewState
                    currentDate={currentDate}
                    onCurrentDateChange={setCurrentDate}
                />

                <DayView
                    startDayHour={INITIAL_START_VALUE}
                    endDayHour={INITIAL_END_VALUE}
                    timeScaleLabelComponent={DayTimeLabel}
                />
                <WeekView
                    startDayHour={INITIAL_START_VALUE}
                    endDayHour={INITIAL_END_VALUE}
                    timeScaleLabelComponent={WeekTimeLabel}
                />
                <MonthView />

                <EditingState onCommitChanges={commitChanges} />
                <IntegratedEditing />

                <Appointments />
                <ConfirmationDialog />
                <AppointmentTooltip showOpenButton showDeleteButton />
                <AppointmentForm messages={SCHEDULER_MESSAGES['pl-PL']} />

                <Toolbar />
                <ViewSwitcher />

                <AllDayPanel messages={SCHEDULER_MESSAGES['pl-PL']} />
                <DateNavigator />
                <TodayButton messages={SCHEDULER_MESSAGES['pl-PL']} />
                <Resources data={RESOURCES} />
            </Scheduler>
        </>
    )
}

export default Calender
