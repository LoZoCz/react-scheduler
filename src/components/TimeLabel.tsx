import { DayView, WeekView } from '@devexpress/dx-react-scheduler-material-ui'
import { FC } from 'react'
import formatTime from '../utils/formatTime'

const WeekTimeLabel: FC = ({ ...restProps }) => {
    return <WeekView.TimeScaleLabel {...restProps} formatDate={formatTime} />
}

const DayTimeLabel: FC = ({ ...restProps }) => {
    return <DayView.TimeScaleLabel {...restProps} formatDate={formatTime} />
}

export { WeekTimeLabel, DayTimeLabel }
