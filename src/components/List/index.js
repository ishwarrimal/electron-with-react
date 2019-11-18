import React from 'react';
import { connect } from 'react-redux'

const WeatherList = ({weatherJSON}) => {
    console.log(weatherJSON)
  
    return <pre><code>{weatherJSON ?  JSON.stringify(weatherJSON, null, 4) : 'No data'}</code></pre>
} 

const mapStateToProps = ({weatherJSON}) => ({
    weatherJSON: weatherJSON,
})
export default connect(mapStateToProps,null)(WeatherList)
     