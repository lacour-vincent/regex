import { isUsername, isPassword, isEmail, isBirthdate, isPhoneFR, isZipcode, isHexColor, isSlug } from "./regex";

describe("username", () => {
  test.each([
    ["my-user-name", true],
    ["Z", false],
    ["user-name-very-long-with-a-lot-of-characters", false],
    ["$my-username", false],
  ])("%p is username: %p", (username, expected) => {
    expect(isUsername(username)).toBe(expected);
  });
});

describe("password", () => {
  test.each([
    ["myPassword42", true],
    ["mypassword42", false],
    ["mypassword", false],
    ["MYPASSWORD42", false],
  ])("%p is password: %p", (password, expected) => {
    expect(isPassword(password)).toBe(expected);
  });
});

describe("email", () => {
  test.each([
    ["vincent@github.com", true],
    ["vincent42@github.com", true],
    ["vincent.lacour@github.com", true],
    ["vincent_lacour@github.com", true],
    ["vincent-lacour@github.com", true],
    ["vincent@github42.com", true],
    ["vincent@github-test.com", true],
    ["42vincent@github.com", false],
    ["vincent@github.com42", false],
    ["vincent@github.coooooom", false],
  ])("%p is email: %p", (email, expected) => {
    expect(isEmail(email)).toBe(expected);
  });
});

describe("birthdate", () => {
  test.each([
    ["01/01/1990", true],
    ["10/01/1990", true],
    ["22/01/1990", true],
    ["31/01/1990", true],
    ["32/01/1990", false],
    ["01/13/1990", false],
    ["01/01/990", false],
  ])("%p is birthdate: %p", (birthdate, expected) => {
    expect(isBirthdate(birthdate)).toBe(expected);
  });
});

describe("phone-fr", () => {
  test.each([
    ["0601020304", true],
    ["0701020304", true],
    ["+33701020304", true],
    ["+32701020304", false],
    ["0001020304", false],
    ["06010203", false],
    ["060102030405", false],
    ["06O1020304", false],
    ["", false],
  ])("%p is phone fr: %p", (phone, expected) => {
    expect(isPhoneFR(phone)).toBe(expected);
  });
});

describe("zipcode", () => {
  test.each([
    ["75000", true],
    ["acbcd", false],
    ["7500", false],
  ])("%p is zipcode fr: %p", (zipcode, expected) => {
    expect(isZipcode(zipcode)).toBe(expected);
  });
});

describe("hex-color", () => {
  test.each([
    ["#FFFFFF", true],
    ["#FFF", true],
    ["#FFFFFF80", true],
    ["#FFFFFG", false],
    ["FFFFFF", false],
    ["#FFFFF", false],
  ])("%p is hex-color fr: %p", (color, expected) => {
    expect(isHexColor(color)).toBe(expected);
  });
});

describe("slug", () => {
  test.each([
    ["slug", true],
    ["slug42", true],
    ["slug-with-hyphen", true],
    ["slug-with-123-and-hyphen", true],
    ["Slug", false],
    ["slug$", false],
    ["slug_with_underscore", false],
  ])("%p is slug fr: %p", (slug, expected) => {
    expect(isSlug(slug)).toBe(expected);
  });
});
