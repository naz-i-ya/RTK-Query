import { useGetCountryDataQuery, UseQueryStateDefaultResult, QueryDefinition, BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, UseQuerySubscriptionOptions, UseQueryStateOptions, UseQueryHookResult } from '../api/covidApi';

export function useCustomGetCountryDataQuery(
  options?: UseQuerySubscriptionOptions & UseQueryStateOptions<UseQueryStateDefaultResult<QueryDefinition<any, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, any, "covidApi">>>
): UseQueryHookResult<UseQueryStateDefaultResult<QueryDefinition<any, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, any, "covidApi">>> {
  return useGetCountryDataQuery(undefined, options);
}
