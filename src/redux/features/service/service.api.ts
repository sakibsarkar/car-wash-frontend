import { api } from "@/redux/api/api";
import { IService } from "@/types/service";
interface IQueryOptions {
  searchTerm?: string;
  min?: number;
  max?: number;
  sort?: string;
  page?: string | number;
  limit?: number | string;
}
const serviceAPi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSrvices: builder.query<
      { data: IService[]; totalDoc: number },
      IQueryOptions
    >({
      query: (query) => {
        const {
          max = "",
          min = "",
          searchTerm = "",
          sort = "",
          page,
          limit,
        } = query;
        return {
          url: `/services?searchTerm=${searchTerm}&min=${min}&max=${max}&sort=${sort}&page=${
            page || "1"
          }&limit=${limit || 10}`,
          method: "GET",
        };
      },
      providesTags: ["service"],
    }),
    getServiceById: builder.query<{ data: IService }, string>({
      query: (id: string) => {
        return {
          url: `/services/${id}`,
          method: "GET",
        };
      },
      providesTags: ["service"],
    }),
  }),
});
export const { useGetSrvicesQuery, useGetServiceByIdQuery } = serviceAPi;
