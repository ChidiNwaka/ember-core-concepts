import { helper } from '@ember/component/helper';

function multiply([num1, num2]) {
  return num1 * num2;
}

export default helper(multiply);
