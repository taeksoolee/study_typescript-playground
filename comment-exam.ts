/**
 * @author Taeksoo Lee <https://github.com/taeksoolee>
 * @see https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#type
 * @authdate 
 */

/**
 * @description 
 * @param {number} n1 - some number
 * @param {number} n2 - some number
 * @returns {number}
 */
function calcPlus(n1: number, n2: number): number {
  return n1 + n2;
}

/**
 * @deprecated
 * @returns {string}
 */
const deprecatedFunc = () => 'deprecated!';
console.log(deprecatedFunc);

/** @type {HTMLBodyElement} */
const body = document.querySelector('body');

/**
 * print 'hello world' string 
 * @param {Car} car - target car {@link Car1}
 */
function printColor(car: Car1) {
  console.log(car.color);
}

/*********************************************
 * @description - class comments 
 *********************************************/

interface CarBase {
  color: string;
  drive(): void;
}

/**
 * @param {string} color - car color
 */
class Car1 implements CarBase {
  color: string = '';

  constructor(color: string) {
    this.color = color;
  }

  drive(): void {
    console.log('br... br...');
  }
}

class Car2 extends Car1 {
  /** @override */
  drive(): void {
    console.log('br!!! br!!!');
  }
}

/** @enum {number} */
const EnumData = {
  A: 1, B: 2, C: 3
}


/****************************
 * typedef - 
 ****************************/
/**
 * @typedef {Object} CusomOptions - The shape is the same as SpecialType above
 * @property {string} requirementString
 * @property {number} requirementNumber
 * @property {number=} optionalNumber
 */

/** @param {CusomOption} option - {@link CusomOption} */
function printOption(options: {
  prop1: string,
  prop2: number,
  prop3?: number,
  propp4: number[]
}) {
  console.log(options);
}


