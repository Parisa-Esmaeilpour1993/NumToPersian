let userNumber = +prompt("Enter a Number");

function convert(number) {
  const ones = ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"];
  const teens = [
    "ده",
    "یازده",
    "دوازده",
    "سیزده",
    "چهارده",
    "پانزده",
    "شانزده",
    "هفده",
    "هجده",
    "نوزده",
  ];
  const tens = [
    "",
    "ده",
    "بیست",
    "سی",
    "چهل",
    "پنجاه",
    "شصت",
    "هفتاد",
    "هشتاد",
    "نود",
  ];
  const hundreds = [
    "",
    "یکصد",
    "دویست",
    "سیصد",
    "چهارصد",
    "پانصد",
    "ششصد",
    "هفتصد",
    "هشتصد",
    "نهصد",
  ];
  const units = ["", "هزار", "میلیون", "میلیارد"];

  if (number === 0) return "صفر";

  let result = "";

  function splitIntoThreeDigits(number) {
    let section = [];
    while (number.length > 0) {
      section.unshift(number.slice(-3));
      number = number.slice(0, -3);
    }
    return section;
  }

  let numSection = splitIntoThreeDigits(number.toString());
  console.log(numSection);

  function convertThreeDigits(number) {
    let partResult = "";
    if (number >= 100) {
      partResult += hundreds[Math.floor(number / 100)] + " و ";
      number %= 100;
    }
    if (number >= 10 && number <= 19) {
      partResult += teens[number - 10] + "";
    } else {
      if (number >= 20) {
        partResult += tens[Math.floor(number / 10)] + " و ";
        number %= 10;
      }
      if (number > 0) {
        partResult += ones[number] + "";
      }
    }
    
    return partResult.replace(/ و $/, "");
  }

  for (let i = 0; i <= numSection.length - 1; i++) {
    let part = parseInt(numSection[i], 10);
    if (part > 0) {
      result +=
        convertThreeDigits(part) +
        " " +
        units[numSection.length - 1 - i] +
        " و ";
    }
  }

  return result.replace(/ و $/, "");
}

let finalResult = convert(userNumber);

alert(finalResult);
console.log(finalResult);
