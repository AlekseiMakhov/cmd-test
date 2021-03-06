import translateInitials from "./translateInitials"
import handleAddress from "./handleAddress"


/**
 * 
 * Функция принимает значения полей ввода из формы для формирования из этих данных
 * уникального номера записи, проверяет данные на корректность, формирует флаг ошибки
 * при некорректном вводе, массив ошибок для отображения пользователю
 * 
 * @param {Object} - объект значений полей ввода и адреса (ответа от сервиса dadata)
 * @returns {Object} - объект с результирующей строкой (номером записи), ошибками ввода
 */
function handleUserData(
    { name, address, recordDate }
) {
    let isError = false,    // флаг ошибки
        errors = [],        // массив ошибок
        result = ''         // результирующий номер записи

    const initials = translateInitials(name)
    const userAddress = handleAddress(address)
    let date = recordDate

    if (date == undefined) {
        isError = true
        errors.push('Поле "Дата вызова" не заполнено или заполено некорректно.')
        // console.log('Поле "Дата вызова" не заполнено или заполено некорректно.')
    } else
        date = date.split('.').reverse().join('-')

    if (initials.isError) {
        isError = true
        errors.push(initials.errorText)
    }

    if (userAddress.isError) {
        isError = true
        errors.push(...userAddress.errors)
    }

    if (!isError) {
        result = userAddress.country + '/' +
            userAddress.region + '/' +
            initials.initials + '/' +
            userAddress.GLAT + '-' +
            userAddress.GLON + '/' +
            date
    }

    return { isError: isError, errors, result: result }
}

export default handleUserData