import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { Address } from 'src/common/models/address.model';

export class CompanyDto {
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  companyProfileImageUrl: string;

  @IsOptional()
  @IsString()
  companyHeaderImageUrl: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 500)
  company_info: string;

  @IsOptional()
  @IsString()
  homepage?: string;

  @ApiProperty({
    description: 'address field',
    type: Address,
  })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Address)
  address: Address;
}
