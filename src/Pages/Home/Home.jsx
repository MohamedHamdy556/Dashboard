import React from 'react'
import Chart from '../../Component/chart/chart'
import FeaturedInfo from '../../Component/FeaturedInfo/FeaturedInfo'
import "./Home.css"
import {UserData} from '../../DummyData/DummyData'
import WidgetSm from '../../Component/Widgetsm/WidgetSm'
import WidgetLg from '../../Component/WidgetLg/WidgetLg'

function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={UserData} title="Users Analytics" dataKey='Active User' grid/>
            <div className="HomeWidget">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default Home
