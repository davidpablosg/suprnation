import {CalculatorService} from './calculator.service';
import {Test, TestingModule} from "@nestjs/testing";

describe('CalculatorService', () => {
    let calculatorService: CalculatorService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({providers: [CalculatorService]}).compile();

        calculatorService = module.get<CalculatorService>(CalculatorService);
    });

    it('should be defined', () => {
        expect(calculatorService).toBeTruthy();
    });

    describe('validateExpression', () => {
        it('should be defined', () => {
            expect(calculatorService.validateExpression).toBeDefined();
        });

        describe('Valid expression to be true', () => {
            it('3+2+4', () => {
                expect(calculatorService.validateExpression('3+2+4')).toBeTruthy();
            });

            it('+2', () => {
                expect(calculatorService.validateExpression('+2')).toBeTruthy();
            });

            it('-2', () => {
                expect(calculatorService.validateExpression('-2')).toBeTruthy();
            });

            it('sin(30)+cos(20)', () => {
                expect(calculatorService.validateExpression('sin(30)+cos(20)')).toBeTruthy();
            });
        });

        describe('Invalid expression to be false', () => {
            it('sin(30', () => {
                expect(calculatorService.validateExpression('sin(30')).toBeFalsy();
            });

            it('3++', () => {
                expect(calculatorService.validateExpression('3++')).toBeFalsy();
            });

            it('3+', () => {
                expect(calculatorService.validateExpression('3+')).toBeFalsy();
            });
        });

        describe('Non-supported expression to be false', () => {
            it('sqrt(30)', () => {
                expect(calculatorService.validateExpression('sqrt(30)')).toBeFalsy();
            });

            it('60%3', () => {
                expect(calculatorService.validateExpression('60%3')).toBeFalsy();
            });
        });
    });
    describe('evaluateExpression', () => {
        it('should be defined', () => {
            expect(calculatorService.evaluateExpression).toBeDefined();
        });

        describe('Valid expressions evaluations', () => {
            it('The result of 3+2 is 5', () => {
                expect(calculatorService.evaluateExpression('3+2')).toEqual(5);
            });
            it('The result of 3-2 is 1', () => {
                expect(calculatorService.evaluateExpression('3-2')).toEqual(1);
            });
            it('The result of 3*2 is 6', () => {
                expect(calculatorService.evaluateExpression('3*2')).toEqual(6);
            });
            it('The result of 6/2 is 3', () => {
                expect(calculatorService.evaluateExpression('6/2')).toEqual(3);
            });
            it('The result of 3+2*3 is 9', () => {
                expect(calculatorService.evaluateExpression('3+2*3')).toEqual(9);
            });
            it('The result of sin(0) is 0', () => {
                expect(calculatorService.evaluateExpression('sin(0)')).toEqual(0);
            });
            it('The result of sin(0) + cos(0) is 1', () => {
                expect(calculatorService.evaluateExpression('sin(0)+cos(0)')).toEqual(1);
            });
            it('The result of sin(30) - tan(0) is 0', () => {
                expect(calculatorService.evaluateExpression('sin(0) - tan(0)')).toEqual(0);
            });
            it('The result of sin(30) + cos(20) is -0.5799495622794699', () => {
                expect(calculatorService.evaluateExpression('sin(30)+cos(20)')).toEqual(-0.5799495622794699);
            });
        });
        describe('Invalid expressions throws null', () => {
            it('The result of cos(1 is null', () => {
                expect(calculatorService.evaluateExpression('cos(0')).toBeNull();
            });
            it('The result of sqrt(9) is null', () => {
                expect(calculatorService.evaluateExpression('sqrt(9)')).toBeNull();
            });
            it('The result of 3/0 is Infinite', () => {
                expect(calculatorService.evaluateExpression('3/0')).toBe(Infinity);
            });
        });
    });
});