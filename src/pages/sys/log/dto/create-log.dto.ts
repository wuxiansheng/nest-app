@Post()
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateLogDto {
    @ApiModelProperty()
    readonly index: number;

    @ApiModelProperty()
    readonly nickname: string;

    @ApiModelProperty()
    readonly userId: string;
    @ApiModelProperty()
    readonly date: string;
    @ApiModelProperty()
    readonly method: string;
    @ApiModelProperty()
    readonly host: string;
    @ApiModelProperty()
    readonly url: string;
    @ApiModelProperty()
    readonly status: string;
    @ApiModelProperty()
    readonly desc: string;
}
