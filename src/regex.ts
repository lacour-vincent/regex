const USERNAME_REGEX = /^([a-zA-Z0-9_-]){2,15}$/;
const PASSWORD_REGEX = /^(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})\w{8,}$/;
const EMAIL_REGEX = /^([a-z]{1})([a-z0-9-_\.]{1,})\@([a-z0-9-]{1,})\.([a-z]{2,6})$/;
const BIRTHDATE_REGEX = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
const PHONE_FR_REGEX = /^(\+33){0,1}(0){0,1}([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})$/;
const ZIPCODE_REGEX = /^\d{5}$/;
const HEXCOLOR_REGEX = /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$/;
const SLUG_REGEX = /^[a-z0-9-]{1,}$/;

const assert = (input: string, regex: RegExp): boolean => regex.test(input);

export const isUsername = (username: string): boolean => assert(username, USERNAME_REGEX);
export const isPassword = (password: string): boolean => assert(password, PASSWORD_REGEX);
export const isEmail = (email: string): boolean => assert(email, EMAIL_REGEX);
export const isBirthdate = (birthdate: string): boolean => assert(birthdate, BIRTHDATE_REGEX);
export const isPhoneFR = (phone: string): boolean => assert(phone, PHONE_FR_REGEX);
export const isZipcode = (zipcode: string): boolean => assert(zipcode, ZIPCODE_REGEX);
export const isHexColor = (color: string): boolean => assert(color, HEXCOLOR_REGEX);
export const isSlug = (slug: string): boolean => assert(slug, SLUG_REGEX);
