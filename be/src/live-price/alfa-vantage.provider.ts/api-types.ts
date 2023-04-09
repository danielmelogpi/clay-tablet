export namespace AlfaAdvantageApi {
  export namespace SymbolPriceSeries {
    export interface Metadata {
      '1. Information': string;
      '2. Symbol': string;
      '3. Last Refreshed': string;
      '4. Output Size': string;
      '5. Time Zone': string;
    }

    export type DateForKey =
      `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

    export interface SeriesPoint {
      '1. open': number;
      '2. high': number;
      '3. low': number;
      '4. close': number;
      '5. adjusted close': number;
      '6. volume': number;
      '7. dividend amount': number;
      '8. split coefficient': number;
    }
    export interface Response {
      'Meta Data': Metadata;
      'Time Series (Daily)': Record<DateForKey, SeriesPoint>;
    }
  }
}
