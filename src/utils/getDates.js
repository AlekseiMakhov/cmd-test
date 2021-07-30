import { DAYS_TO_MAXDATE } from '../config/constants'

/**
 * Функция добавляет 0 в начало месяца/дня, если число меньше 10
 * 
 * @param {number}
 * @returns {string}
 */
const addZero = value => (value < 10) ? '0' + value : value

/**
 * Функция возвращает дату в виде строки формата ГГГГ-ММ-ДД
 * 
 * @param {number} day 
 * @param {number} month 
 * @param {number} year 
 * @returns {string}
 */
const dateToString = (day, month, year) => `${year}-${addZero(month)}-${addZero(day)}`


/**
 * Функция определяет диапазон дат для фильтра поля ввода, возвращает объект с
 * минимальной (сегодняшней) и максимальной датами в формате ГГГГ-ММ-ДД
 * 
 * @returns {Object}
 */
const getDates = () => {
    let today = new Date, maxDate = new Date
    let day = today.getDate(),
        month = today.getMonth() + 1,
        year = today.getFullYear()

    maxDate.setDate(maxDate.getDate() + DAYS_TO_MAXDATE)

    let maxDay = maxDate.getDate(),
        maxMonth = maxDate.getMonth() + 1,
        maxYear = maxDate.getFullYear()

    today = dateToString(day, month, year)
    maxDate = dateToString(maxDay, maxMonth, maxYear)

    return { today, maxDate }
}

export default getDates