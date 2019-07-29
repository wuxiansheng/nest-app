import { ApiModelProperty } from '@nestjs/swagger';
export class CreateUserDto {
    @ApiModelProperty()
    readonly username: string;
    @ApiModelProperty()
    readonly password: string;
    @ApiModelProperty()
    readonly email: string;
    @ApiModelProperty()
    readonly phone: number;
    @ApiModelProperty()
    readonly image: string;
    @ApiModelProperty()
    readonly favorites: object;
    @ApiModelProperty()
    readonly article: object;
}
