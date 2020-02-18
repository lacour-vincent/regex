describe("Birthdate", () => {
  const BIRTHDATE_REGEX = /([0-1][1-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}/;
  it("should return true", () => {
    const birthdate = "01/01/1990";
    const isBirthdate = BIRTHDATE_REGEX.test(birthdate);
    expect(isBirthdate).toBe(true);
  });

  it("should return false with wrong day", () => {
    const birthdate = "32/01/1990";
    const isBirthdate = BIRTHDATE_REGEX.test(birthdate);
    expect(isBirthdate).toBe(false);
  });

  it("should return false with wrong month", () => {
    const birthdate = "01/13/1990";
    const isBirthdate = BIRTHDATE_REGEX.test(birthdate);
    expect(isBirthdate).toBe(false);
  });

  it("should return false with wrong year", () => {
    const birthdate = "01/01/990";
    const isBirthdate = BIRTHDATE_REGEX.test(birthdate);
    expect(isBirthdate).toBe(false);
  });
});

describe("Zipcode", () => {
  const ZIPCODE_REGEX = /\d{5}/;
  it("should return true", () => {
    const zipcode = "75000";
    const isZipcode = ZIPCODE_REGEX.test(zipcode);
    expect(isZipcode).toBe(true);
  });

  it("should return false", () => {
    const zipcode = "acbcd";
    const isZipcode = ZIPCODE_REGEX.test(zipcode);
    expect(isZipcode).toBe(false);
  });
});
