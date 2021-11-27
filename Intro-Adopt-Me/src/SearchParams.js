import { useState } from 'react'

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("rabbit")

    return (
        <div className="search-params">
            <form>
                <label hrmlFor="location">
                    Location
                    <input id="location" 
                    onChange={e => setLocation(e.target.value)} 
                    value={location} 
                    placeholder="Location"/>
                </label>


                <label htmlFor="animal">
                    Animal
                    <select 
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}>

                        
                        {
                            ANIMALS.map((animal) => (
                                <option value={animal} key={animal}>
                                    {animal}
                                </option>
                            ))
                        }

                    </select>
                </label>
            </form>
        </div>
    )

}

export default SearchParams;
