import { Field, InputType } from '@nestjs/graphql';
import { LiveValueForTimeRangeModel } from './model/live-price.model';
import dayjs from 'dayjs';

@InputType('PriceFetchRequest')
export class PriceFetchRequestDto {
  @Field(() => Date, {
    defaultValue: dayjs().subtract(1, 'week').toDate()
  })
  dateStart: Date;
  @Field(() => Date, { defaultValue: dayjs().toDate() })
  dateEnd: Date;
  @Field({ nullable: false })
  assetCode: string;
  @Field(() => String, { defaultValue: 'br' })
  jurisdiction: 'br' | 'us';
}

export interface IPriceProvider {
  getAssetPrice(
    priceRequest: PriceFetchRequestDto
  ): Promise<LiveValueForTimeRangeModel>;
}
