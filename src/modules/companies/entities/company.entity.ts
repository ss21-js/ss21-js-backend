import { ApiProperty } from '@nestjs/swagger';
import { Address } from 'src/common/models/address.model';

export class Company {
  user_id: string;
  email: string;
  contact_mail: string;
  company_info: string;
  homepage: string;
  image_url: string;
  @ApiProperty({
    description: 'address field',
    type: Address,
  })
  address: Address;

  constructor(partial: Partial<Company>) {
    Object.assign(this, partial);
  }
}