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
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.deezer.com/artist/27" }),
    endpoints: (builder) => ({
        getAlbums: builder.query({
            query:() => '/albums/?client_id=a5665f4654279eda6c91e746db691675'
        }),
        getTopArtist: builder.query({
            query: () => `/top/?limit=10&client_id=a5665f4654279eda6c91e746db691675`
        }),
        getRelated: builder.query({
            query: () => `/related`
        })
   
    })
})


export const {
    useGetAlbumsQuery, useGetTopArtistQuery,useGetRelatedQuery
} = albumsApi