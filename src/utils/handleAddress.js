function handleAddress (address) {

    const result = {
        country: '',
        region: '',
        GLAT: '',
        GLON: '',
        isError: '',
        errors: []
    }

    // const { log } = console

    if (address == undefined) {
        result.isError = true
        result.errors.push('Ошибка ввода: поле "Адрес" не зполнено.')
        // log('Поле "Адрес" не зполнено.')
    }
    else {
        if (address.country == null) {
            result.isError = true
            result.errors.push('Ошибка ввода адреса: не указана страна.')
            // log('Некорректно введен адрес (страна).')
        } else 
            result.country = address.country

        if (address.region_iso_code == null) {
            result.isError = true
            result.errors.push('Ошибка ввода адреса: не указан регион.')
            // log('Некорректно введен адрес (регион).')
        } else
            result.region = address.region_iso_code

        if (address.geo_lat == null) {
            result.isError = true
            result.errors.push('Необходимо уточнить адрес: отсутствует широта.')
            // log('Некорректно введен адрес. Нужно ввести точнее')
        } else
            result.GLAT = 'GLAT' + address.geo_lat

        if (address.geo_lon == null) {
            result.isError = true
            result.errors.push('Необходимо уточнить адрес: отсутствует долгота.')
            // log('Некорректно введен адрес. Нужно ввести точнее')
        } else
            result.GLON = 'GLON' + address.geo_lon
    }

    return result
}

export default handleAddress