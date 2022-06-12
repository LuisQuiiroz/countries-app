
const Country = ({ country }) => {
    const { altSpellings, borders, capital, continents, flags, languages = [], name, population, } = country


    const altNames = altSpellings.map(item => <li id={item}> {item} </li>)
    // const lang = languages.map(({ item }, i) => <li id={item}> {item[i]} </li>)

    return (
        <div>
            {/* <p>altSpellings: {altSpellings[0]} </p>
            <p>borders: {borders[0]} </p>
            <p>capital: {capital[0]} </p>
            <p>continents: {continents[0]} </p>
            <p>flags: {flags[0]} </p> */}
            <h2><b>{name.common}</b> </h2>
            <p>capital: {capital[0]} </p>
            <p>Population: <b>{population.toLocaleString()}</b> </p>
            <h4>Languages: {Object.values(languages).map(e => <li> {e} </li>)} </h4>
            <p>Others names: {altNames} </p>
            <img
                src={flags.png}
            />

        </div>
    )
}

export default Country