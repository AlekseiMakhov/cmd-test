import translateInitials from "./translateInitials"
import handleAddress from "./handleAddress"

function handleUserData(
    { name, address, recordDate }
) {
    let isError = false,
        errors = [],
        result = ''

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