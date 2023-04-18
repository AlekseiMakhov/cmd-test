import { DAYS_TO_MAXDATE } from '../config/constants'

const addZero = value => (value < 10) ? '0' + value : value

const dateToString = (day, month, year) => `${year}-${addZero(month)}-${addZero(day)}`

const getRange = () => {
    let min = new Date;
    let max = new Date;
    
    let day = min.getDate(),
        month = min.getMonth() + 1,
        year = min.getFullYear()
    
    max.setDate(max.getDate() + DAYS_TO_MAXDATE)

    let maxDay = max.getDate(),
        maxMonth = max.getMonth() + 1,
        maxYear = max.getFullYear()

    min = dateToString(day, month, year)
    max = dateToString(maxDay, maxMonth, maxYear)

    return { min, max }
}

export default getRange
