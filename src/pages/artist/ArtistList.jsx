import React from 'react'
import ArtistView from '../../components/artistview/ArtistView'
import CardUI from './../../UI/CardUI'
import AlbumCard from '../../components/albumcard/AlbumCard'

const ArtistList = () => {
return (
<div>
  <ArtistView />
  <CardUI className="my-0 px-20 bg-transparent">
    <div>
      <h1 className="text-white text-2xl my-3 bg-transparent">Albums</h1>
      <AlbumCard />
    </div>
  </CardUI>
</div>
)
}

export default ArtistList