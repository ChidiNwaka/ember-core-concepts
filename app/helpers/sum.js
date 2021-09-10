import { helper } from '@ember/component/helper';

function sum([num1, num2]) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'NAN - We cannot caclulate this';
  }

  return num1 + num2;
}

export default helper(sum);
