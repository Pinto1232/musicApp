import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const albumApiHeader = {
    "headers": {
        "Accept": "application/json",
    },
}

const createRequest = (url) => ({ url, headers: albumApiHeader });

export const albumsApi = createApi({
    reducerPath: 'albumsApi',
    tagTypes: ['albumsApi'],
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.deezer.com/artist/27",
 }),
    endpoints: (builder) => ({
        getAlbums: builder.query({
            query:() => '/albums',
        }),
        getTopArtist: builder.query({
            query: () => `/top`
        }),
        getRelated: builder.query({
            query: () => `/related`
        }),
        getRadio: builder.query(
            {
                query: () => `/radio`
            })
   
    })
})


export const {
    useGetAlbumsQuery,
    useGetTopArtistQuery,
    useGetRelatedQuery,
    useGetRadioQuery,
} = albumsApi