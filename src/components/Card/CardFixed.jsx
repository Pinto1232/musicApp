import React from 'react'
import './../Card/CardFixe.css'
import { useGetRadioQuery, useGetAlbumsQuery, useGetTopArtistQuery } from '../../services/AllApi'


const CardFixed = () => {
    const { data: dataRadio, isLoading, error, isSuccess } = useGetRadioQuery("")
    const {data: albumsData, } = useGetAlbumsQuery("") 
    console.log("Data for card hover", dataRadio);


  return (
      <>
          <div style={{ marginTop: '15em', padding: '0', marginLeft: '15%' }} className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-6 md:grid-cols-5  lg:grid-cols-4 gap-4 ">
              {dataRadio?.data.slice(0, 8).map((items, index) => (
                  <div key={items.id}>

                      <div className="cardModule ">
                          <div className="image">
                              <div className="flex justify-center p-5 z-50  bg-smooth-black  text-center">
                                  <span className="text-white">{items.name}</span>
                              </div>
                              <img src={items.picture_medium} />
                          </div>
                          <div className="details">
                              <div className="center">
                                  <h1>{items.title}<br /><span>{`Album Title: ${items.title}`}</span></h1>
                                  <span className="grid justify-center "><img src={`${items.cover}`} alt="" /></span>
                                  <ul>
                                      <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                      <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                      <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                      <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                      <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </>
  )
}

export default CardFixed