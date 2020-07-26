import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

describe('ApiController', () => {
  let apiController: ApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
      providers: [ApiService],
    }).compile();

    apiController = app.get<ApiController>(ApiController);
  });

  it('should be defined', () => {
    expect(apiController).toBeTruthy();
  });

  describe('Validate Api Route', () => {
    it('validate should be defined', () => {
      expect(apiController.validateExpression).toBeDefined();
    });
  });
  describe('Evaluate Api Route', () => {
    it('evaluate should be defined', () => {
      expect(apiController.evaluateExpression).toBeDefined();
    });
  });
});
