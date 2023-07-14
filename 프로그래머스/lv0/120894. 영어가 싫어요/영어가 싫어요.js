function solution(numbers) {
  const ddd = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ].join("|");

  const reg = new RegExp(ddd, "g");

  return parseInt(numbers.match(reg).map((item) => convert(item)).join(""));
}

function convert(item) {
  switch (item) {
      case "zero":
          return 0;function solution(numbers) {
  const ddd = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ].join("|");

  const reg = new RegExp(ddd, "g");

  return parseInt(
    numbers
      .match(reg)
      .map((item) => convert(item))
      .join("")
  );
}

function convert(item) {
  switch (item) {
    case "zero":
      return 0;
    case "one":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
  }
}

    case "one":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
  }
}