import moment from 'moment'

const convertFromUnix = (firestoreDate: {
    seconds: number
    nanoseconds: number
}) => {
    return moment.unix(firestoreDate.seconds).format()
}

export default convertFromUnix
