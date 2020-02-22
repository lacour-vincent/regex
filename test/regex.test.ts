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
