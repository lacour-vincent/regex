describe("Username", () => {
  const USERNAME_REGEX = /^([a-zA-Z0-9_-]){2,15}$/;

  it("should return true - classic username", () => {
    const username = "my-user-name";
    const isUsername = USERNAME_REGEX.test(username);
    expect(isUsername).toBe(true);
  });

  it("should return false - too short username", () => {
    const username = "Z";
    const isUsername = USERNAME_REGEX.test(username);
    expect(isUsername).toBe(false);
  });

  it("should return false - too long username", () => {
    const username = "user-name-very-long-with-a-lot-of-characters";
    const isUsername = USERNAME_REGEX.test(username);
    expect(isUsername).toBe(false);
  });

  it("should return false - special characters", () => {
    const username = "$my-username";
    const isUsername = USERNAME_REGEX.test(username);
    expect(isUsername).toBe(false);
  });
});

describe("Password", () => {
  const PASSWORD_REGEX = /^(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})\w{8,}$/;

  it("should return true - strong password", () => {
    const password = "myPassword42";
    const isPassword = PASSWORD_REGEX.test(password);
    expect(isPassword).toBe(true);
  });

  it("should return false - missing at least one uppercase", () => {
    const password = "mypassword42";
    const isPassword = PASSWORD_REGEX.test(password);
    expect(isPassword).toBe(false);
  });

  it("should return false - missing at least one digit", () => {
    const password = "mypassword";
    const isPassword = PASSWORD_REGEX.test(password);
    expect(isPassword).toBe(false);
  });

  it("should return false - missing at least one lowercase", () => {
    const password = "MYPASSWORD42";
    const isPassword = PASSWORD_REGEX.test(password);
    expect(isPassword).toBe(false);
  });
});

describe("Email", () => {
  const EMAIL_REGEX = /^([a-z]{1})([a-z0-9-_\.]{1,})\@([a-z0-9-]{1,})\.([a-z]{2,6})$/;

  it("should return true - classic email", () => {
    const email = "vincent@github.com";
    const isEmail = EMAIL_REGEX.test(email);
    expect(isEmail).toBe(true);
  });

  it("should return true - user digit", () => {
    const email = "vincent42@github.com";
    const isEmail = EMAIL_REGEX.test(email);
    expect(isEmail).toBe(true);
  });

  it("should return true - user with dot", () => {
    const email = "vincent.lacour@github.com";
    const isEmail = EMAIL_REGEX.test(email);
    expect(isEmail).toBe(true);
  });

  it("should return true - user with underscore", () => {
    const email = "vincent_lacour@github.com";
    const isEmail = EMAIL_REGEX.test(email);
    expect(isEmail).toBe(true);
  });

  it("should return true - user with hyphen", () => {
    const email = "vincent-lacour@github.com";
    const isEmail = EMAIL_REGEX.test(email);
    expect(isEmail).toBe(true);
  });

  it("should return true - domain with digit", () => {
    const email = "vincent@github42.com";
    const isEmail = EMAIL_REGEX.test(email);
    expect(isEmail).toBe(true);
  });

  it("should return true - domain with hyphen", () => {
    const email = "vincent@github-test.com";
    const isEmail = EMAIL_REGEX.test(email);
    expect(isEmail).toBe(true);
  });

  it("should return false - user begin with digit", () => {
    const email = "42vincent@github.com";
    const isEmail = EMAIL_REGEX.test(email);
    expect(isEmail).toBe(false);
  });

  it("should return false - extension with digit", () => {
    const email = "vincent@github.com42";
    const isEmail = EMAIL_REGEX.test(email);
    expect(isEmail).toBe(false);
  });

  it("should return false - extension too long", () => {
    const email = "vincent@github.coooooom";
    const isEmail = EMAIL_REGEX.test(email);
    expect(isEmail).toBe(false);
  });
});

describe("Birthdate", () => {
  const BIRTHDATE_REGEX = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  it("should return true - day inferior to 10", () => {
    const birthdate = "01/01/1990";
    const isBirthdate = BIRTHDATE_REGEX.test(birthdate);
    expect(isBirthdate).toBe(true);
  });

  it("should return true - day between 10 and 20", () => {
    const birthdate = "10/01/1990";
    const isBirthdate = BIRTHDATE_REGEX.test(birthdate);
    expect(isBirthdate).toBe(true);
  });

  it("should return true - day betwwen 20 and 30", () => {
    const birthdate = "22/01/1990";
    const isBirthdate = BIRTHDATE_REGEX.test(birthdate);
    expect(isBirthdate).toBe(true);
  });

  it("should return true - day superior to 30", () => {
    const birthdate = "31/01/1990";
    const isBirthdate = BIRTHDATE_REGEX.test(birthdate);
    expect(isBirthdate).toBe(true);
  });

  it("should return false - day superior to 31", () => {
    const birthdate = "32/01/1990";
    const isBirthdate = BIRTHDATE_REGEX.test(birthdate);
    expect(isBirthdate).toBe(false);
  });

  it("should return false - month superior to 12", () => {
    const birthdate = "01/13/1990";
    const isBirthdate = BIRTHDATE_REGEX.test(birthdate);
    expect(isBirthdate).toBe(false);
  });

  it("should return false - year with 3 digits", () => {
    const birthdate = "01/01/990";
    const isBirthdate = BIRTHDATE_REGEX.test(birthdate);
    expect(isBirthdate).toBe(false);
  });
});

describe("Zipcode", () => {
  const ZIPCODE_REGEX = /^\d{5}$/;
  it("should return true - classic zipcode", () => {
    const zipcode = "75000";
    const isZipcode = ZIPCODE_REGEX.test(zipcode);
    expect(isZipcode).toBe(true);
  });

  it("should return false - no digits found", () => {
    const zipcode = "acbcd";
    const isZipcode = ZIPCODE_REGEX.test(zipcode);
    expect(isZipcode).toBe(false);
  });

  it("should return false - zipcode with 4 digits", () => {
    const zipcode = "7500";
    const isZipcode = ZIPCODE_REGEX.test(zipcode);
    expect(isZipcode).toBe(false);
  });
});

describe("Hex color", () => {
  const HEXCOLOR_REGEX = /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$/;

  it("should return true - classic hex color", () => {
    const hexColor = "#FFFFFF";
    const isHexColor = HEXCOLOR_REGEX.test(hexColor);
    expect(isHexColor).toBe(true);
  });

  it("should return true - hex color simplified", () => {
    const hexColor = "#FFF";
    const isHexColor = HEXCOLOR_REGEX.test(hexColor);
    expect(isHexColor).toBe(true);
  });

  it("should return true - hex color with transparency", () => {
    const hexColor = "#FFFFFF80";
    const isHexColor = HEXCOLOR_REGEX.test(hexColor);
    expect(isHexColor).toBe(true);
  });

  it("should return false - hex color no valid", () => {
    const hexColor = "#FFFFFG";
    const isHexColor = HEXCOLOR_REGEX.test(hexColor);
    expect(isHexColor).toBe(false);
  });

  it("should return false - missing #", () => {
    const hexColor = "FFFFFF";
    const isHexColor = HEXCOLOR_REGEX.test(hexColor);
    expect(isHexColor).toBe(false);
  });

  it("should return false - wrong lenght", () => {
    const hexColor = "#FFFFF";
    const isHexColor = HEXCOLOR_REGEX.test(hexColor);
    expect(isHexColor).toBe(false);
  });
});

describe("Slug", () => {
  const SLUG_REGEX = /^[a-z0-9-]{1,}$/;

  it("should return true - slug all lowercase", () => {
    const slug = "slug";
    const isSlug = SLUG_REGEX.test(slug);
    expect(isSlug).toBe(true);
  });

  it("should return true - slug with digit", () => {
    const slug = "slug42";
    const isSlug = SLUG_REGEX.test(slug);
    expect(isSlug).toBe(true);
  });

  it("should return true - slug with hyphen", () => {
    const slug = "slug-with-hyphen";
    const isSlug = SLUG_REGEX.test(slug);
    expect(isSlug).toBe(true);
  });

  it("should return true - slug with digit and hyphen", () => {
    const slug = "slug-with-digit-and-hyphen";
    const isSlug = SLUG_REGEX.test(slug);
    expect(isSlug).toBe(true);
  });

  it("should return false - slug with uppercase", () => {
    const slug = "Slug";
    const isSlug = SLUG_REGEX.test(slug);
    expect(isSlug).toBe(false);
  });

  it("should return false - slug with special character", () => {
    const slug = "slug$";
    const isSlug = SLUG_REGEX.test(slug);
    expect(isSlug).toBe(false);
  });

  it("should return false - slug with underscore", () => {
    const slug = "slug_with_underscore";
    const isSlug = SLUG_REGEX.test(slug);
    expect(isSlug).toBe(false);
  });
});
