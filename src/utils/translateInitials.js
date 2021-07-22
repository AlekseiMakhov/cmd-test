// Объект для транслитерации ФИО на латинницу
const translatedLetters = {
    'а': 'A', 'б': 'B',
    'в': 'V', 'г': 'G',
    'д': 'D', 'е': 'E',
    'ё': 'E', 'ж': 'Zh',
    'з': 'Z', 'и': 'I',
    'й': 'Y', 'к': 'K',
    'л': 'L', 'м': 'M',
    'н': 'N', 'о': 'O',
    'п': 'P', 'р': 'R',
    'с': 'S', 'т': 'T',
    'у': 'U', 'ф': 'F',
    'х': 'Kh', 'ц': 'Ts',
    'ч': 'Ch', 'ш': 'Sh',
    'щ': 'Sch', 'ъ': '-',
    'ы': 'I', 'ь': '-',
    'э': 'E', 'ю': 'Yu',
    'я': 'Ya'
}

/**
 * Функция принимает ФИО в кириллице, возвращает инициалы в латиннице, формирует 
 * ошибку в случае недопустимого ввода
 * 
 * @param {string} name - ФИО, введенные пользователем в форме
 * @returns {object} 
 */
function translateInitials(name) {
    let isError = false,    // флаг ошибки
        initials = ''       // инициалы на латиннице

    initials = name.toLowerCase().split(' ')
        .reduce((sum, w) => sum += w[0].replace(/(.)/, symb => translatedLetters[symb]), '')
    if (initials.includes('-')) isError = true

    return { initials, isError, errorText: 'Некорректно заполнено поле ФИО.' }
}

export default translateInitials