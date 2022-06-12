import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./Country";
import './index.css'


function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [nameCountry, setNameCountry] = useState('');
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/name/';
    if (search.length > 0) {
      axios
        .get(`${url}${search}`)
        .then(response => {
          setCountries(response.data)
        })
        .catch(() => console.log('no matches')
        )
    }
  }, [search]);

  useEffect(() => {
    if (nameCountry.length > 0) {
      const url = `https://restcountries.com/v3.1/name/${nameCountry}?fullText=true`
      axios
        .get(url)
        .then(response => {
          setCountry(response.data)
          setCountries([])
          // setSearch('')
        }
        )
    }
  }, [nameCountry]);

  const handleClick = e => {
    setNameCountry(e.target.value)
  }

  return (
    <div >
      <h1>Find countries</h1>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {
          countries.length > 0 &&
          <ul>
            {
              countries.map(country => (
                <li key={country.name.official}>
                  <input
                    type="button"
                    value={country.name.official}
                    onClick={handleClick}
                  />
                </li>
              ))
            }
          </ul>
        }
      </div>
      <div>
        {
          country.length > 0 &&
          // <p>{country[0].name.official}</p>
          <Country country={country[0]} />

        }
        {/* {
          countries.length >= 10
            ? <p>too many countries</p>
            : countries.map(country => <Country key={country.name.common} country={country} />)
        } */}

      </div>
    </div>
  )
}

export default App
