import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
} from '@nestjs/swagger';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @ApiOperation({
    summary: 'Validate expression',
    description: 'Receives expression as string, return boolean',
  })
  @ApiOkResponse({
    description: 'Returns a boolean indicating a expression is valid or not',
  })
  @Get('validate/:expression')
  async validateExpression(
    @Param('expression') expression: string,
  ): Promise<boolean> {
    return this.apiService.validateExpression(expression);
  }

  @ApiOperation({
    summary: 'Evaluate expression',
    description: 'Receives expression as string, return number or null',
  })
  @ApiOkResponse({
    description: 'Returns a number with the result of the expression',
  })
  @Get('evaluate/:expression')
  async evaluateExpression(
    @Param('expression') expression: string,
  ): Promise<number | null> {
    return this.apiService.evaluateExpression(expression);
  }
}
