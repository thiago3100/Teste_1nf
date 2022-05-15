
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import { Container } from "../../styles/global";
import React, { useState } from 'react'
import axios from 'axios'
import * as C from '../../styles/global'
import './Styled.scss'

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=132270b5e0ddfee7f308c64059e63ad2`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url) .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      console.log(data)
      setLocation('')
    }
  }
  return (
      <Container>   
        <C.App>
          <C.Search>
            <input
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              placeholder='Enter Location'
              type="text" />
            <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
              Sair 
            </Button>
          </C.Search>
          <C.Contain>           
            <C.Top>
              <C.Location>
                <p>{data.name}</p>
              </C.Location>
              <C.Temp>
                {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
              </C.Temp>
              <C.Desc>
              {data.weather ? <p>{data.weather[0].description}</p> : null} 
              </C.Desc>
            </C.Top>
            {data.name !== undefined &&
              <C.Response>
                <C.Feels>
                  {data.main ? <p className='bold'>{data.main.temp_max.toFixed()}°C</p> : null}
                  <p>Máx</p>
                </C.Feels>
                <C.Feels>
                  {data.main ? <p className='bold'>{data.main.temp_min.toFixed()}°C</p> : null}
                  <p>Min</p>
                </C.Feels>
                <C.Humidity>
                  {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                  <p>Humidity</p>
                </C.Humidity>
                <C.Wind>
                  {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                  <p>Wind Speed</p>
                </C.Wind>
              </C.Response>
            }
          </C.Contain>
        </C.App>       
      </Container>
  );
};

export default Home;
