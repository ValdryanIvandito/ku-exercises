// EXAMPLE-1: A MINI DATE IMPLEMENTATION, BUILT FROM SCRATCH

/* 
  Everything below is computed from a single number: milliseconds since the
  Unix epoch (1970-01-01 00:00:00 UTC), the same way the built-in Date works
*/

const EPOCH_YEAR = 1970;

class Tanggal {
  _year;
  _month;
  _date;

  constructor(millis) {
    this._millis = millis;
    // Days elapsed since epoch — the base unit for everything below
    const totalDays = Math.floor(millis / 86400000);

    const { y, m, d } = this._decompose(totalDays);

    this._year = y;
    this._month = m;
    this._date = d;
  }

  getFullYear() {
    return this._year;
  }

  getMonth() {
    return this._month;
  }

  getDate() {
    return this._date;
  }

  getMilliseconds() {
    return this._millis % 1000;
  }

  getSeconds() {
    return Math.floor(this._millis / 1000) % 60;
  }

  getMinutes() {
    return Math.floor(this._millis / (1000 * 60)) % 60;
  }

  getHours() {
    return Math.floor(this._millis / (1000 * 3600)) % 24;
  }

  toISOString() {
    // Build the string piece by piece: yyyy-mm-ddThh:mm:ss.xxxZ
    let str = String(this.getFullYear()).padStart(4, "0");
    str += "-";
    str += String(this.getMonth() + 1).padStart(2, "0");
    str += "-";
    str += String(this.getDate()).padStart(2, "0");
    str += "T";
    str += String(this.getHours()).padStart(2, "0");
    str += ":";
    str += String(this.getMinutes()).padStart(2, "0");
    str += ":";
    str += String(this.getSeconds()).padStart(2, "0");
    str += ".";
    str += String(this.getMilliseconds()).padStart(3, "0");
    str += "Z";

    return str;
  }

  _decompose(days) {
    // Walk year by year from the epoch, subtracting each year's day count
    // until what remains fits inside a single year
    let y = EPOCH_YEAR;
    let d = days;

    while (true) {
      let daysInYear = this._isLeapYear(y) ? 366 : 365;

      if (d < daysInYear) break;

      d -= daysInYear;

      y++;
    }

    // Days in each month (February depends on whether the year is a leap year)
    const monthLengths = [
      31, // Jan
      this._isLeapYear(y) ? 29 : 28, // Feb
      31, // Mar
      30, // Apr
      31, // May
      30, // June
      31, // July
      31, // August
      30, // Sep
      31, // Oct
      30, // Nov
      31, // Dec
    ];

    // Subtract month lengths until the remainder fits in one month;
    // days are 1-based, so add 1 at the end
    let m = 0;

    while (d >= monthLengths[m]) {
      d -= monthLengths[m];
      m++;
    }

    return { y, m, d: d + 1 };
  }

  // Leap year rule: divisible by 400, or by 4 but not by 100
  _isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }

  // Lets the object respond to type conversions: returns the ISO string
  // when a string is expected (or nothing specific), the raw milliseconds otherwise
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return this.toISOString();
    }

    return this._millis;
  }
}

// Both instances encode the same moment: 25 Jun 2005 01:10:05.725 UTC
const tanggal1 = new Tanggal(1119661805725);

console.log("Year: " + tanggal1.getFullYear());
console.log("Month: " + tanggal1.getMonth());
console.log("Date: " + tanggal1.getDate());
console.log("Hours: " + tanggal1.getHours());
console.log("Minutes: " + tanggal1.getMinutes());
console.log("Seconds: " + tanggal1.getSeconds());
console.log("Milliseconds: " + tanggal1.getMilliseconds());
console.log(tanggal1.toISOString(), "\n"); // Output: ISO 8601 / RFC 3339 format

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// EXAMPLE-2: THE BUILT-IN EQUIVALENT 
// same inputs, same outputs via the real Date class

const date = new Date(1119661805725); // Same moment: 25 Jun 2005 01:10:05.725 UTC

console.log("Year: " + date.getFullYear());
console.log("Month: " + date.getMonth());
console.log("Date: " + date.getDate());
console.log("Hours: " + date.getHours());
console.log("Minutes: " + date.getMinutes());
console.log("Seconds: " + date.getSeconds());
console.log("Milliseconds: " + date.getMilliseconds());
console.log(date.toISOString()); // Output: identical ISO 8601 / RFC 3339 string

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// THE UNIX EPOCH — timestamp 0 is 1970-01-01T00:00:00.000Z in both

const genesisTanggal = new Tanggal(0);
console.log(genesisTanggal.toISOString());

const genesisDate = new Date(0);
console.log(genesisDate.toISOString());
