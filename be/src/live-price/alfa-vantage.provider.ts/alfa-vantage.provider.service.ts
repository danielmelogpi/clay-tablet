import { Injectable } from '@nestjs/common';
import {
  IPriceProvider,
  PriceFetchRequestDto
} from '../price-provider.interface';
import { LiveValueForTimeRangeModel } from '../model/live-price.model';
import { ConfigService } from '@nestjs/config';
import { AlfaAdvantageApi } from './api-types';
import axios from 'axios';
import dayjs from 'dayjs';

@Injectable()
export class AlfaVantageProviderService implements IPriceProvider {
  private readonly queryApi = 'https://www.alphavantage.co/query';

  constructor(private readonly config: ConfigService) {}

  async getAssetPrice(
    priceRequest: PriceFetchRequestDto
  ): Promise<LiveValueForTimeRangeModel> {
    const key = this.config.get('ALFA_VANTAGE_KEY');

    const assetCodeSuffix = priceRequest.jurisdiction === 'br' ? '.SAO' : '';
    const assetCode = priceRequest.assetCode + assetCodeSuffix;

    const { data } =
      await axios.get<AlfaAdvantageApi.SymbolPriceSeries.Response>(
        `${this.queryApi}?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${assetCode}&apikey=${key}`
      );
    const dates = Object.getOwnPropertyNames(data['Time Series (Daily)']) ?? [];
    const pricesInDates = dates.map((date) => ({
      date: dayjs(date, 'YYYY-MM-DD').toDate(),
      day: date || '',
      price: Number(data['Time Series (Daily)'][date]['4. close'])
    }));

    return {
      currency: 'BRL',
      dateEnd: priceRequest.dateEnd,
      dateStart: priceRequest.dateStart,
      granularity: 'daily',
      prices: pricesInDates.filter(
        (entry) =>
          entry.date <= priceRequest.dateEnd &&
          entry.date >= priceRequest.dateStart
      )
    };
  }
}
