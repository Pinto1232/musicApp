import React from 'react'
import HomeCard from '../../components/homeCard/HomeCard'
import HomeCardDown from '../../components/homeCard/HomeCardDown'
import Wrapper from '../../components/wrapper/Wrapper'
import CardUI from '../../UI/CardUI'



const Home = () => {
  return (
    <>
      <div className="container min-w-full mx-auto py-9 md:py-12 px-4 mb-8 -mt-4 md:px-6">
        <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div>
            <div>
              <HomeCard />
            </div>
          </div>
        </div>
      </div>

      <Wrapper className="bg-transparent">
        <HomeCardDown />
      </Wrapper>
    </>
  )
}

export default Home