export enum Tips {
  REQUIRED = 'Обязательное поле',
  MAX_LENGTH = 'Максимальное кол-во символов',
  EMAIL = 'Введите корректный email',
  PHONE = 'Введите номер телефона',
  LETTERS_EN_RU = 'Только латинские или кириллические буквы',
  LETTERS_EN_RU_AND_NUMBERS = 'Только латинские, кириллические буквы и цифры'
}

export const regex = {
  email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]{2,}\.[a-zA-Z.]{2,}$/,
  nickname: /^[a-zA-Zа-яА-яёЁ0-9]+$/,
  name: /^[a-zA-Zа-яА-яёЁ]+$/,
  surname: /^[a-zA-Zа-яА-яёЁ]+$/
}