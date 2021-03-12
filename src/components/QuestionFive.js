import { useEffect, useState} from 'react'
import axios from 'axios'
import "../css/questionFive.css"

const QuestionFive = () => {

    // I ran into CORS issues while trying to query this API
    // To get this to work i used a chrome extension, which can be found here -- https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc
    // If this fails for you, i recommed using that extension to bypass the CORS issues. 




    const [ query, setQuery ] = useState('')
    const [ queryResults, setQueryResults ] = useState([])
    const [ cityLoading, setCityLoading ] = useState(false)
    const [ weatherLoading, setWeatherLoading  ] = useState(false)
    const [ locationWeather, setLocationWeather ] = useState('')


    useEffect(() => {

        if(query.length < 3){
            setQueryResults([])
            return
        }

        const url = `https://www.metaweather.com/api/location/search/?query=${query}`
        
        const getData = async (url) => {
            setCityLoading(true)
           const { data } = await axios.get(url)
           setCityLoading(false)
           setQueryResults(data)
        }

        getData(url)

    }, [query])

    const searchLocation = async (worldId) => {
        setLocationWeather('')
        setWeatherLoading(true)
        const url = `https://www.metaweather.com/api/location/${worldId}`
        const { data } = await axios.get(url)
        const necessaryData = data.consolidated_weather[0]
        necessaryData.title = data.title
        necessaryData.country = data.parent.title
        setWeatherLoading(false)
        setLocationWeather(necessaryData)
    }

    return (
        <div className = 'questionFive'>
            <h2>Question Five</h2>
            <div className="q5__container">
                <div className="container__left">
                    <form className = 'weatherForm'>
                        <label htmlFor="weatherSearch">Search For Weather By Location</label>
                        <input type="text" id = 'weatherSearch' value = {query} onChange = {(e)=> setQuery(e.currentTarget.value)} placeholder = 'Type here to search' />
                        <span style = {{fontSize : '11px'}}>Seach must be 3 charcters long</span>
                    </form>

                    <div className="results">
                        {
                            cityLoading && <h5>Loading...</h5>
                        }
                        {
                            queryResults.length === 0 ? <p style = {{marginTop : '20px'}}>No Results Currently</p> :
                            (
                            queryResults.map( location => (
                                <div key = {location.woeid} className = 'search__result' onClick = {() => searchLocation(location.woeid)}>
                                    <p>{location.title}</p>
                                </div>
                            ))
                            )
                        }
                    </div>
                </div>
                <div className="container__right">
                        {
                            weatherLoading && <h2 style = {{alignSelf : 'center'}}>Loading...</h2>
                        }
                        {
                            locationWeather &&
                            (
                                <div className = 'weather__card'>
                                    <h4>{locationWeather.title}, {locationWeather.country}</h4>
                                    <h5>{locationWeather.weather_state_name}</h5>
                                    <img src={`https://www.metaweather.com/static/img/weather/${locationWeather.weather_state_abbr}.svg`} alt="weather_symbol" style = {{height: '40px', width : '40px'}} />
                                    <p>Date : {locationWeather.applicable_date}</p>
                                    <p>Temp: {(locationWeather.the_temp).toFixed(2)} °C</p>
                                    <p>Max Temp: {(locationWeather.max_temp).toFixed(2)} °C</p>
                                    <p>Min Temp: {(locationWeather.min_temp).toFixed(2)} °C</p>
                                    <p>Wind Speed: {(locationWeather.wind_speed).toFixed(2)} mph</p>

                                    
                                </div>
                            )
                        }
                </div>
            </div>
        </div>
       
    
    )
}

export default QuestionFive
