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
});