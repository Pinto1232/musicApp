import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const albumApiHeader = {
	headers: {
		Accept: 'application/json'
	}
};

const createRequest = (url) => ({ url, headers: albumApiHeader });

export const albumsApi = createApi({
	reducerPath: 'albumsApi',
	tagTypes: [ 'albumsApi' ],
	baseQuery: fetchBaseQuery({
		baseUrl: '/'
	}),
	endpoints: (builder) => ({
		getAlbums: builder.query({
			query: () => '/api/artist/27/albums'
		}),
		getTopArtist: builder.query({
			query: () => `/api/artist/27/top`
		}),
		getRelated: builder.query({
			query: () => `/api/artist/27/related`
		}),
		getRadio: builder.query({
			query: () => `/api/radio`
		})
	})
});

export const { useGetAlbumsQuery, useGetTopArtistQuery, useGetRelatedQuery, useGetRadioQuery } = albumsApi;
