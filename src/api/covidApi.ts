import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const covidApi = createApi({
  reducerPath: 'covidApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://disease.sh/v3/covid-19' }),
  endpoints: (builder) => ({
    getHistoricalData: builder.query({
      query: () => 'historical/all?lastdays=all',
    }),
    getCountryData: builder.query({
      query: () => 'countries',
    }),
  }),
});

export const { useGetHistoricalDataQuery, useGetCountryDataQuery } = covidApi;
