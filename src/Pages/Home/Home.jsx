import React from 'react'
import FeaturedInfo from '../../Component/FeaturedInfo/FeaturedInfo'
import "./Home.css"
import {UserData} from '../../DummyData/DummyData'
import WidgetLg from '../../Component/WidgetLg/WidgetLg'
import Chart from '../../Component/chart/chart'
import Filters from '../../Component/Filters/Filters'
import Search from '../../Component/Search/Search'

function Home() {
    return (
        <div className="home">
           
            <FeaturedInfo/>
            <Chart data={UserData} title="Users Analytics" dataKey='Active User' grid/> 
            <Filters/>
            <Search/>
            <div className="HomeWidget">
               
                <WidgetLg/>
            </div>
        </div>
    )
}

export default Home
