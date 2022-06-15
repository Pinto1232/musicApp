import React from 'react'
import HomeCard from '../../components/homeCard/HomeCard'
import HomeCardDown from '../../components/homeCard/HomeCardDown'
import Wrapper from '../../components/wrapper/Wrapper'
import CardUI from '../../UI/CardUI'



const Home = () => {
  return (
    <>
      <CardUI className="flex flex-col bg-transparent  text-center justify-between ">
        <div  className="bg-transparent" >
          <div className="  gap-6 ">
            <div className=" text-white  ">
              <HomeCard />
            </div>
          </div>
        </div>
      </CardUI>

      <Wrapper className="bg-transparent">
        <HomeCardDown />
      </Wrapper>
    </>
  )
}

export default Home