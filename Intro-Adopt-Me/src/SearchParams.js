import { useState } from 'react'

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");

    return (
        <div className="search-params">
            <form>
                <label hrmlFor="location">
                    Location
                    <input id="location" onChange={e => setLocation(e.target.value)} value={location} placeholder="Location"/>
                </label>
            </form>
        </div>
    )

}

export default SearchParams;
