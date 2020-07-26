import SuperExpressive = require('super-expressive');
import math = require('mathjs');
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  public validateExpression(expression: string): boolean {
    const sanitizedExpression = expression.split(' ').join('');
    const myRegex = SuperExpressive()
      .startOfInput.capture.anyOf.group.optional.anyOfChars('+-')
      .oneOrMore.digit.end()
      .group.anyOf.string('sin(')
      .string('cos(')
      .string('tan(')
      .end()
      .oneOrMore.digit.char(')')
      .end()
      .end()
      .zeroOrMore.group.anyOfChars('+-*/')
      .anyOf.oneOrMore.digit.group.anyOf.string('sin(')
      .string('cos(')
      .string('tan(')
      .end()
      .oneOrMore.digit.char(')')
      .end()
      .end()
      .end()
      .end()
      .endOfInput.toRegex();
    return myRegex.test(sanitizedExpression);
  }

  public evaluateExpression(expression: string): number {
    const sanitizedExpression = expression.split(' ').join('');
    return this.validateExpression(sanitizedExpression)
      ? math.evaluate(sanitizedExpression)
      : null;
  }
}
