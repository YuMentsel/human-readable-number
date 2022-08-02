module.exports = function toReadable (num) {
  let result = '';

  if (num === 0) {
    result = 'zero';
  }

  if (num >= 100) {
    result = toReadable(Math.trunc(num / 100)) + ' hundred' + (num % 100 == 0 ? '' : ' ' + toReadable(num % 100));
  } else if (num < 20) {
    switch (num) {
      case 1:
        result += 'one';
        break;
      case 2:
        result += 'two';
        break;
      case 3:
        result += 'three';
        break;
      case 4:
        result += 'four';
        break;
      case 5:
        result += 'five';
        break;
      case 6:
        result += 'six';
        break;
      case 7:
        result += 'seven';
        break;
      case 8:
        result += 'eight';
        break;
      case 9:
        result += 'nine';
        break;
      case 10:
        result += 'ten';
        break;
      case 11:
        result += 'eleven';
        break;
      case 12:
        result += 'twelve';
        break;
      case 13:
        result += 'thirteen';
        break;
      case 14:
        result += 'fourteen';
        break;
      case 15:
        result += 'fifteen';
        break;
      case 16:
        result += 'sixteen';
        break;
      case 17:
        result += 'seventeen';
        break;
      case 18:
        result += 'eighteen';
        break;
      case 19:
        result += 'nineteen';
        break;
    }
  } else {
    if (num % 10 === 0) {
      switch (num) {
        case 20:
          result += 'twenty';
          break;
        case 30:
          result += 'thirty';
          break;
        case 40:
          result += 'forty';
          break;
        case 50:
          result += 'fifty';
          break;
        case 60:
          result += 'sixty';
          break;
        case 70:
          result += 'seventy';
          break;
        case 80:
          result += 'eighty';
          break;
        case 90:
          result += 'ninety';
          break;
      }
    } else {
      let units = num % 10;
      result += toReadable(num - units) + ' ' + toReadable(units);
    }
  }
  return result;
}
