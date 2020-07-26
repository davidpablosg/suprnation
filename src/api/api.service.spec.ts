import { ApiService } from './api.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('ApiService', () => {
  let apiService: ApiService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiService],
    }).compile();

    apiService = module.get<ApiService>(ApiService);
  });

  it('should be defined', () => {
    expect(apiService).toBeTruthy();
  });

  describe('validateExpression', () => {
    it('should be defined', () => {
      expect(apiService.validateExpression).toBeDefined();
    });

    describe('Valid expression to be true', () => {
      it('3+2+4', () => {
        expect(apiService.validateExpression('3+2+4')).toBeTruthy();
      });

      it('+2', () => {
        expect(apiService.validateExpression('+2')).toBeTruthy();
      });

      it('-2', () => {
        expect(apiService.validateExpression('-2')).toBeTruthy();
      });

      it('sin(30)+cos(20)', () => {
        expect(apiService.validateExpression('sin(30)+cos(20)')).toBeTruthy();
      });
    });

    describe('Invalid expression to be false', () => {
      it('sin(30', () => {
        expect(apiService.validateExpression('sin(30')).toBeFalsy();
      });

      it('3++', () => {
        expect(apiService.validateExpression('3++')).toBeFalsy();
      });

      it('3+', () => {
        expect(apiService.validateExpression('3+')).toBeFalsy();
      });
    });

    describe('Non-supported expression to be false', () => {
      it('sqrt(30)', () => {
        expect(apiService.validateExpression('sqrt(30)')).toBeFalsy();
      });

      it('60%3', () => {
        expect(apiService.validateExpression('60%3')).toBeFalsy();
      });
    });
  });
  describe('evaluateExpression', () => {
    it('should be defined', () => {
      expect(apiService.evaluateExpression).toBeDefined();
    });

    describe('Valid expressions evaluations', () => {
      it('The result of 3+2 is 5', () => {
        expect(apiService.evaluateExpression('3+2')).toEqual(5);
      });
      it('The result of 3-2 is 1', () => {
        expect(apiService.evaluateExpression('3-2')).toEqual(1);
      });
      it('The result of 3*2 is 6', () => {
        expect(apiService.evaluateExpression('3*2')).toEqual(6);
      });
      it('The result of 6/2 is 3', () => {
        expect(apiService.evaluateExpression('6/2')).toEqual(3);
      });
      it('The result of 3+2*3 is 9', () => {
        expect(apiService.evaluateExpression('3+2*3')).toEqual(9);
      });
      it('The result of sin(0) is 0', () => {
        expect(apiService.evaluateExpression('sin(0)')).toEqual(0);
      });
      it('The result of sin(0) + cos(0) is 1', () => {
        expect(apiService.evaluateExpression('sin(0)+cos(0)')).toEqual(1);
      });
      it('The result of sin(30) - tan(0) is 0', () => {
        expect(apiService.evaluateExpression('sin(0) - tan(0)')).toEqual(0);
      });
      it('The result of sin(30) + cos(20) is -0.5799495622794699', () => {
        expect(apiService.evaluateExpression('sin(30)+cos(20)')).toEqual(
          -0.5799495622794699,
        );
      });
    });
    describe('Invalid expressions throws null', () => {
      it('The result of cos(1 is null', () => {
        expect(apiService.evaluateExpression('cos(0')).toBeNull();
      });
      it('The result of sqrt(9) is null', () => {
        expect(apiService.evaluateExpression('sqrt(9)')).toBeNull();
      });
      it('The result of 3/0 is Infinite', () => {
        expect(apiService.evaluateExpression('3/0')).toBe(Infinity);
      });
    });
  });
});
