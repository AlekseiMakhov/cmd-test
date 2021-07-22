const addZero = value => (value < 10) ? '0' + value : value
const dateToString = (day, month, year) => `${year}-${addZero(month)}-${addZero(day)}`

const getDates = () => {
    let today = new Date, maxDate = new Date
    let day = today.getDate(),
        month = today.getMonth() + 1,
        year = today.getFullYear()

    maxDate.setDate(maxDate.getDate() + 14)

    let maxDay = maxDate.getDate(),
        maxMonth = maxDate.getMonth() + 1,
        maxYear = maxDate.getFullYear()

    today = dateToString(day, month, year)
    maxDate = dateToString(maxDay, maxMonth, maxYear)

    return { today, maxDate }
}

export default getDates