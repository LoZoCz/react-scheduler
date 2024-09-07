import { SchedulerDateTime } from '@devexpress/dx-react-scheduler'
import moment from 'moment'

const formatTime = (date: SchedulerDateTime | undefined) =>
    moment(date).format('HH:mm')

export default formatTime
