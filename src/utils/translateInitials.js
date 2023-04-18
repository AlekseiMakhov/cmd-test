import { translatedLetters } from '@/config/constants'

function translateInitials(name) {
    let isError = false,    // флаг ошибки
        initials = ''       // инициалы на латиннице

    initials = name.toLowerCase().split(' ')
        .reduce((sum, w) => sum += w[0].replace(/(.)/, symb => translatedLetters[symb]), '')
    if (initials.includes('-')) isError = true

    return { initials, isError, errorText: 'Некорректно заполнено поле ФИО.' }
}

export default translateInitials
