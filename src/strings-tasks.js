/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the length of the given string.
 * Возвращает длину заданной строки
 * @param {string} value - The input string to calculate the length of.
 * @return {number} - The length of the string.
 *
 * @example
 *   getStringLength('aaaaa') => 5
 *   getStringLength('b') => 1
 *   getStringLength('') => 0
 *   getStringLength() => 0
 *   getStringLength(null) => 0
 *   getStringLength(undefined) => 0
 */
function getStringLength(value) {
  let res = 0;
  // проверка на тип аргумента, если строка то записывает в себя значение длины
  if (typeof value === 'string') {
    res += value.length;
  }
  return res;
}

/**
 * Returns true if the value is a string, otherwise returns false.
 * Возвращает true, если значение является строкой, в противном случае возвращает false.
 * @param {string} value - The value to check if it's a string.
 * @return {boolean} - True if the value is a string, false otherwise.
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  // Оператор instanceof проверяет, принадлежит ли объект к определённому классу.
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns the result of concatenation of two strings.
 * Возвращает результат конкатенации двух строк.
 * @param {string} value1 - The first string to concatenate.
 * @param {string} value2 - The second string to concatenate.
 * @return {string} - The concatenated string.
 *
 * @example
 *   concatenateStrings('aa', 'bb') => 'aabb'
 *   concatenateStrings('aa', '') => 'aa'.
 *   concatenateStrings('', 'bb') => 'bb'
 */
function concatenateStrings(value1, value2) {
  // через оператор + не получилось
  // return value1 + value2;
  // Метод concat() объединяет текст из двух или более строк и возвращает новую строку.
  const res = '';
  return res.concat(value1, value2);
}

/**
 * Returns the first character of the given string.
 * Возвращает первый символ заданной строки.
 * @param {string} value - The input string to extract the first character from.
 * @return {string} - The first character of the string.
 *
 * @example
 *   getFirstChar('John Doe') => 'J'
 *   getFirstChar('cat') => 'c'
 *   getFirstChar('') => ''
 */
function getFirstChar(value) {
  // так тоже не получилось
  // return value[0];
  // Метод charAt() возвращает указанный символ из строки.
  return value.charAt(0);
}

/**
 * Removes leading and trailing whitespace characters from the string.
 * Удаляет ведущие и замыкающие пробельные символы из строки.
 * @param {string} value - The input string to remove leading and trailing whitespaces from.
 * @return {string} - The string with leading and trailing whitespaces removed.
 *
 * @example
 *   removeLeadingAndTrailingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingAndTrailingWhitespaces('cat ') => 'cat'
 *   removeLeadingAndTrailingWhitespaces('\t\t\tHello, World! ') => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  // Метод trim() удаляет пробельные символы с начала и конца строки.
  // Пробельными символами в этом контексте считаются все собственно пробельные символы:
  // (пробел, табуляция, неразрывный пробел и прочие) и все символы конца строки (LF, CR и прочие).
  return value.trim();
  // Используем регулярное выражение для удаления пробельных символов с обеих сторон строки
  // return value.replace(/^\s+|\s+$/g, '');
  // ^\s+: Это регулярное выражение означает "один или более пробельных символов в начале строки".
  // /\s+$/, которое соответствует заключительным пробельным символам в конце строки
  // '' - заменяем на пустую строку
}

/**
 * Removes only leading whitespace characters from the string.
 * Удаляет только ведущие пробельные символы из строки.
 * @param {string} value - The input string to remove leading whitespaces from.
 * @return {string} - The string with leading whitespaces removed.
 *
 * @example
 *   removeLeadingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingWhitespaces('cat ') => 'cat '
 *   removeLeadingWhitespaces('\t\t\tHello, World! ') => 'Hello, World! '
 */
function removeLeadingWhitespaces(value) {
  // Метод trimStart() удаляет пробельные символы с левого конца строки.
  return value.trimStart();
}

/**
 * Removes only trailing whitespace characters from the string.
 * Удаляет только заключительные пробельные символы из строки.
 * @param {string} value - The input string to remove trailing whitespaces from.
 * @return {string} - The string with trailing whitespaces removed.
 *
 * @example
 *   removeTrailingWhitespaces('  Abracadabra') => '  Abracadabra'
 *   removeTrailingWhitespaces('cat ') => 'cat'
 *   removeTrailingWhitespaces('\t\t\tHello, World! ') => '\t\t\tHello, World!'
 */
function removeTrailingWhitespaces(value) {
  // Метод trimEnd() удаляет пробельные символы с правого конца строки.
  return value.trimEnd();
}

/**
 * Returns a string that is repeated the specified number of times.
 * Возвращает строку, повторенную указанное количество раз.
 * @param {string} str - The string to repeat.
 * @param {number} times - The number of times to repeat the string.
 * @return {string} - The result string.
 *
 * @example
 *   repeatString('A', 5) => 'AAAAA'
 *   repeatString('cat', 3) => 'catcatcat'
 *   repeatString('', 3) => ''
 *   repeatString('abc', -2) => ''
 */
function repeatString(str, times) {
  let res = '';

  if (times <= 0 || typeof str !== 'string') {
    res = '';
  } else {
    // Используем метод repeat для повторения строки указанное количество раз
    // Метод repeat() конструирует и возвращает новую строку,
    // содержащую указанное количество соединённых вместе копий строки, на которой он был вызван.
    res += str.repeat(times);
  }

  return res;
}

/**
 * Remove the first occurrence of a substring from a string.
 * Удаляет первое вхождение подстроки из строки.
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the first occurrence of the substring removed.
 *
 * @example
 *   removeFirstOccurrences('To be or not to be', 'be') => 'To  or not to be'.
 *   removeFirstOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeFirstOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeFirstOccurrences(/* str, value */) {
  // const index = str.indexOf(value);
  // if (index !== -1) {
  //   return str.slice(0, index) + str.slice(index + value.length);
  // }
  // return str;
  throw new Error('Not implemented');
}

/**
 * Remove the last occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the last occurrence of the substring removed.
 *
 * @example
 *   removeLastOccurrences('To be or not to be', 'be') => 'To be or not to '.
 *   removeLastOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeLastOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeLastOccurrences(/* str, value */) {
  throw new Error('Not implemented');
}

/**
 * Calculate the sum of character codes of the given string.
 * Вычисляет сумму кодов символов заданной строки.
 * @param {string} str - The input string.
 * @return {number} - The sum of character codes of the string.
 *
 * @example
 *   sumOfCodes('My String') => 861 (77 + 121 + 32 + 83 + 116 + 114 + 105 + 110 + 103 = 861)
 *   sumOfCodes('12345') => 255 (49 + 50 + 51 + 52 + 53 = 255)
 *   sumOfCodes('') => 0
 *   sumOfCodes() => 0
 */
function sumOfCodes(str) {
  let sum = 0;
  // проверка на то что строка имеет какое-либо значение
  if (!str) {
    return sum;
  }

  // Итерируем по символам строки и вычисляем сумму их кодов по Ascii table
  for (let i = 0; i < str.length; i += 1) {
    // Метод charCodeAt() возвращает числовое значение Юникода для символа по указанному индексу (за исключением кодовых точек Юникода, больших 0x10000).
    sum += str.charCodeAt(i);
  }

  return sum;
}

/**
 * Checks if a string starts with a specific substring.
 * Проверяет, начинается ли строка с определенного подстроки.
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   startsWith('Hello World', 'World') => false
 *   startsWith('Hello World', 'Hello') => true
 */
function startsWith(str, substr) {
  // Метод startsWith() помогает определить,
  // начинается ли строка с символов указанных в скобках, возвращая, соответственно, true или false.
  return str.startsWith(substr);
}

/**
 * Checks if a string ends with a specific substring.
 * Проверяет, заканчивается ли строка определенной подстрокой.
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   endsWith('Hello World', 'World') => true
 *   endsWith('Hello World', 'Hello') => false
 */
function endsWith(str, substr) {
  // Метод endsWith() позволяет определить, заканчивается ли строка символами указанными в скобках,
  // возвращая, соответственно, true или false.
  return str.endsWith(substr);
}

/**
 * Returns a time string in the "mm:ss" format.
 *
 * @param {number} minutes - The number of minutes (non-negative integer).
 * @param {number} seconds - The number of seconds (non-negative integer).
 * @return {string} - The time string in the "mm:ss" format.
 *
 * @example
 *   formatTime(5, 30) => "05:30"
 *   formatTime(1, 15) => "01:15"
 *   formatTime(0, 45) => "00:45"
 *   formatTime(0, 0) => "00:00"
 */
function formatTime(/* minutes, seconds */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string in reverse order.
 * Возвращает строку в обратном порядке.
 * @param {string} str - The input string.
 * @return {string} - The string in reverse order.
 *
 * @example:
 *   reverseString('abcdef') => 'fedcba'
 *   reverseString('12345') => '54321'
 */
function reverseString(str) {
  // пришлось повозиться)
  // Используем метод split('') для разделения строки на массив символов
  // Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
  // И метод reverse() для обращения порядка элементов в массиве
  // Метод reverse() на месте обращает порядок следования элементов массива.
  // Первый элемент массива становится последним, а последний — первым.
  // И метод join('') для объединения массива обратно в строку
  // Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
  return str.split('').reverse().join('');
}

/**
 * Returns a string with characters in alphabetical order.
 * Возвращает строку с символами в алфавитном порядке.
 * @param {string} str - The input string.
 * @return {string} - The string in alphabetical order.
 *
 * @example:
 *   orderAlphabetically('webmaster') => 'abeemrstw'
 *   orderAlphabetically('textbook') => 'bekoottx'
 *   orderAlphabetically('abc123xyz') => '123abcxyz'
 */
function orderAlphabetically(str) {
  // Используем метод split('') для разделения строки на массив символов
  // И метод sort() для сортировки символов в массиве
  // Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
  // Сортировка не обязательно устойчива.
  // Порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode.
  // И метод join('') для объединения массива обратно в строку
  return str.split('').sort().join('');
}

/**
 * Checks if a given string contains a specified substring.
 *
 * @param {string} str - The input string to search within.
 * @param {string} substring - The substring to check for in the input string.
 * @returns {boolean} - True if the input string contains the specified substring, false otherwise.
 *
 * @example
 *   containsSubstring('Hello, World!', 'World') => true
 *   containsSubstring('JavaScript is Fun', 'Python') => false
 *   containsSubstring('12345', '34') => true
 */
function containsSubstring(/* str, substring */) {
  throw new Error('Not implemented');
}

/**
 * Returns the number of vowels in the string.
 * Vowels: 'a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'.
 *
 * @param {string} str - The input string.
 * @return {number} - The number of vowels in the string.
 *
 * @example:
 *   countVowels('apple')  => 2
 *   countVowels('banana') => 3
 *   countVowels('cherry') => 2
 *   countVowels('aEiOu') => 5
 *   countVowels('XYZ') => 1
 */
function countVowels(str) {
  const vowels = 'aeiouyAEIOUY';
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    // Метод includes() проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно true или false.
    // Метод charAt() возвращает указанный символ из строки.
    if (vowels.includes(str.charAt(i))) {
      count += 1;
    }
  }

  return count;
}

/**
 * Returns true if the string is a palindrome; otherwise false.
 * https://en.wikipedia.org/wiki/Palindrome
 *
 * @param {string} str - The input string.
 * @return {bool} - True if the string is a palindrome, false otherwise.
 *
 * @example:
 *   isPalindrome('madam') => true
 *   isPalindrome('racecar') => true
 *   isPalindrome('apple') => false
 *   isPalindrome('No lemon, no melon') => true
 */
function isPalindrome(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Find the longest word in the sentence. If there are multiple longest words,
 * the function returns the first one encountered.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} - The longest word in the sentence.
 *
 * @example:
 *   findLongestWord('The quick brown fox') => 'quick'
 *   findLongestWord('A long and winding road') => 'winding'
 *   findLongestWord('No words here') => 'words'
 */
function findLongestWord(/* sentence */) {
  throw new Error('Not implemented');
}

/**
 * Returns the string where each word is reversed.
 *
 * @param {string} str - The input string.
 * @return {string} - The string where each word is reversed.
 *
 * @example:
 *   reverseWords('Hello World') => 'olleH dlroW'
 *   reverseWords('The Quick Brown Fox') => 'ehT kciuQ nworB xoF'
 */
function reverseWords(str) {
  const words = str.split(' ');
  const arr = [];
  for (let i = 0; i < words.length; i += 1) {
    // Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
    // без этого метода намучался, превращая массив в строку через += и пытался разъединить через джоин, что конечно не вышло
    // Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
    arr.push(words[i].split('').reverse().join(''));
  }

  return arr.join(' ');
}

/**
 * Inverts the case of each character in the given string.
 *
 * @param {string} str - The input string.
 * @returns {string} - The string with the case of each character inverted.
 *
 * @example
 *   invertCase('Hello, World!') =>  'hELLO, wORLD!'
 *   invertCase('JavaScript is Fun') => 'jAVAsCRIPT IS fUN'
 *   invertCase('12345') => '12345'
 */
function invertCase(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName - The first name to include in the template.
 * @param {string} lastName - The last name to include in the template.
 * @return {string} - The formatted string generated from the template.
 *
 * @example
 *   getStringFromTemplate('John','Doe') => 'Hello, John Doe!'
 *   getStringFromTemplate('Chuck','Norris') => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value - The input value.
 * @return {string} - The name extracted from the template.
 *
 * @example
 *   extractNameFromTemplate('Hello, John Doe!') => 'John Doe'
 *   extractNameFromTemplate('Hello, Chuck Norris!') => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  const removeHello = value.match(/Hello, (.+?)!/);

  // Check if a match is found and return the extracted name
  return removeHello ? removeHello[1] : '';
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str - The input tag.
 * @return {string} - The tag without the first and last angle brackets.
 *
 * @example
 *   unbracketTag('<div>') => 'div'
 *   unbracketTag('<span>') => 'span'
 *   unbracketTag('<a>') => 'a'
 */
function unbracketTag(str) {
  if (str.startsWith('<') && str.endsWith('>')) {
    return str.slice(1, -1);
  }
  return str;
}

/**
 * Extracts e-mails from single string with e-mails list delimited by semicolons
 *
 * @param {string} str - The input string.
 * @return {array} - The list of e-mails extracted from the string.
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str - The input string.
 * @return {string} - The ROT13 encoded string.
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns playid card id.
 *
 * Playing cards initial deck includes the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value - The card value.
 * @return {number} - The zero-based index.
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const cardsSuit = [
    'A♣',
    '2♣',
    '3♣',
    '4♣',
    '5♣',
    '6♣',
    '7♣',
    '8♣',
    '9♣',
    '10♣',
    'J♣',
    'Q♣',
    'K♣',
    'A♦',
    '2♦',
    '3♦',
    '4♦',
    '5♦',
    '6♦',
    '7♦',
    '8♦',
    '9♦',
    '10♦',
    'J♦',
    'Q♦',
    'K♦',
    'A♥',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A♠',
    '2♠',
    '3♠',
    '4♠',
    '5♠',
    '6♠',
    '7♠',
    '8♠',
    '9♠',
    '10♠',
    'J♠',
    'Q♠',
    'K♠',
  ];

  const index = cardsSuit.indexOf(value);

  return index;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
