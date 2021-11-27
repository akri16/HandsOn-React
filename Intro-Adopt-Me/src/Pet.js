import { Link } from "react-router-dom";


// Using JSX
const Pet = ({ 
    name,
    animal,
    breed,
    location,
    images,
    id

}) => {

    let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
    if (images.length) {
        hero = images[0];
    }

    return (
        <Link to={`/details/${id}`} className='pet'>
            <div className="image-container">
                <img src={hero} alt={name} />
            </div>
            <div className="info">
                <h2>{name}</h2>
                <h2>{`${animal} - ${breed} - ${location}`}-</h2>
            </div>
            
        </Link>
    )
}

export default Pet;
