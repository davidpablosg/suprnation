import {Controller, Get, Param} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiGatewayTimeoutResponse,
} from '@nestjs/swagger';
import {ApiService} from "./api.service";

@ApiBadRequestResponse({description: 'Bad request'})
@ApiInternalServerErrorResponse({description: 'Internal Server Error'})
@ApiGatewayTimeoutResponse({description: 'Gateway Timeout'})
@Controller('api')

export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @ApiOperation({summary: 'Validate expression', description: 'Receives expression as string, return boolean'})
  @ApiOkResponse({ description: 'Returns a boolean indicating a expression is valid or not' })
  @Get('validate/:expression')
  async validateExpression(@Param('expression') expression:string ): Promise<boolean> {
    return this.apiService.validateExpression(expression);
  }

  @ApiOperation({summary: 'Validate expression', description: 'Receives expression as string, return number'})
  @ApiOkResponse({ description: 'Returns a number with the result of the expression' })
  @Get('evaluate/:expression')
  async evaluateExpression(@Param('expression') expression:string ): Promise<number> {
    return this.apiService.evaluateExpression(expression);
  }
}
