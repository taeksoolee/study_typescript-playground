/**
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html
 */

import "reflect-metadata"; // Reflect 사용을 지원하는 lib, import만 하면 사용 가능

import { stiringifyJson, printLine } from "./libs/utils";
import { formatMetadataKey } from "./libs/symbols";

function classSealDecorator(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

/**
 * 
 * @param constructor 
 * @returns {T}
 */
function classReportableDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    /** type system에서 이 변수는 외부에서 접근할 수 없디. */
    _reportingURL = "http://www...";
  };
}

/**
 * @typedef {Function} FormatDecoratorReturn
 * @param - none
 * @returns {{
 *  (target: Function): void, 
 *  (target: Obejct, propertyKey: string | null): void
 * }}
 */
/**
 * @param {string} formatStr - format expression
 * @returns {FormatDecoratorReturn}
 * @ref {@link formatMetadataKey} {@link getFormat}
 */
function formatDecorator(formatStr: string) {
  return Reflect.metadata(formatMetadataKey, formatStr);
}

/**
 * 
 * @param {any} target 
 * @param {string} propertyKey 
 * @returns {string}
 * @ref {@link formatMetadataKey} 
 * @{@link formatDecorator}
 */
function getFormat(target: any, propertyKey: string): string {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

/**
 * @description - accessor(get, set) 에서 사용 가능한 decorator 정의 (={@link methodDecorator})
 * @param {any} value 
 * @returns {Function}
 */
function accessorDecorator(value: any) {
  console.log('initialize accessorDecorator');
  return function(target: any, properyKey: any, descriptor: PropertyDescriptor) {
    printLine();
    console.log('accessor_decorator_start');
    console.log(`value : ${stiringifyJson(value)}`); // decorator function args
    console.log(`target : ${stiringifyJson(target)}`);
    console.log(`propertyKey : ${stiringifyJson(properyKey)}`); // function name
    console.log(`descriptor : ${stiringifyJson(descriptor)}`);
    console.log('accessor_decorator_end');
  }
}

/**
 * @description - method 에서 사용 가능한 decorator 정의 (={@link accessorDecorator})
 * @param {any} value 
 * @returns {Function}
 */
function methodDecorator(value: any) {
  console.log('initialize methodDecorator');
  return function(target: any, properyKey: any, descriptor: any) {
    printLine();
    console.log('method_decorator_start');
    console.log(`value : ${stiringifyJson(value)}`); // decorator function args
    console.log(`target : ${stiringifyJson(target)}`);
    console.log(`propertyKey : ${stiringifyJson(properyKey)}`); // function name
    console.log(`descriptor : ${stiringifyJson(descriptor)}`);
    console.log('method_decorator_end');
  }
}

function enumerable(value: boolean) {
  console.log('initialize enumerable');
  return function (_: any, __: string, descriptor: PropertyDescriptor) {
    // tsc option 중 target이 ES5 보다 낮을경우 undefinded를 반환한다.
    printLine();
    console.log(`enumerable: ${value}`);
    descriptor.enumerable = value;
  };
}

@classSealDecorator
@classReportableDecorator
export class ExampleApp {
  @formatDecorator('hello decorator!, text : %s')
  _text: string = 'refletion_test_text';

  @accessorDecorator(true)
  get text() {
    return this._text;
  }

  set text(text: string) {
    this._text = text;
  }

  /**
   * @description
   *  1. 각 데코레이터의 표현은 위에서 아래로 평가됩니다.
   *  2. 그런 다음 결과는 아래에서 위로 함수로 호출됩니다.
   * @porcess - enumerable -> methodDecorator
   */
  @methodDecorator({
    text: 'this is method',
  })
  @enumerable(true)
  printWithDecorator(args: any) {
    console.log('hello world', args);
  }

  /**
   * print getFormat return string
   * @ref {@link getFormat}
   */
  printFormatString() {
    const formatStr = getFormat(this, '_text');
    console.log(formatStr.replace(/%s/, this._text));
  }
}