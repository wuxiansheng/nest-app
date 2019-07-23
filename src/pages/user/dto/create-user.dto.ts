@Post()
import { ApiModelProperty } from '@nestjs/swagger';
export class CreateUserDto {
    @ApiModelProperty()
    readonly userName: string;
    @ApiModelProperty()
    readonly password: string;
    @ApiModelProperty()
    readonly email: string;
    @ApiModelProperty()
    readonly phone: number;
    @ApiModelProperty()
    readonly nickname: string;
    @ApiModelProperty()
    readonly age: number;
    @ApiModelProperty()
    readonly living: boolean;
    @ApiModelProperty()
    readonly createdAt: string;
    @ApiModelProperty()
    readonly updatedAt: string;
}
