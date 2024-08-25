import { api } from "@/redux/api/api";
interface IQueryOptions {
  searchTerm?: string;
  min?: number;
  max?: number;
  sort?: string;
  page?: string | number;
}
const serviceAPi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSrvices: builder.query({
      query: (query: IQueryOptions) => {
        const { max = "", min = "", searchTerm = "", sort = "", page } = query;
        return {
          url: `/services?searchTerm=${searchTerm}&min=${min}&max=${max}&sort=${sort}&page=${
            page || "1"
          }`,
          method: "GET",
        };
      },
      providesTags: ["service"],
    }),
  }),
});
export const { useGetSrvicesQuery } = serviceAPi;
