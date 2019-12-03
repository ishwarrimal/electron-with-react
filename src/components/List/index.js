import React from 'react';
import { connect } from 'react-redux'

const WeatherList = ({weatherJSON}) => {
    console.log(weatherJSON)
  
    return <pre><code>{weatherJSON ?  JSON.stringify(weatherJSON, null, 4) : 'You dont have any data now. Please click on the button above to fetch data.'}</code></pre>
} 

const mapStateToProps = ({weatherJSON}) => ({
    weatherJSON: weatherJSON,
})
export default connect(mapStateToProps,null)(WeatherList)
     