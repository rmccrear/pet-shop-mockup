import PropTypes from 'prop-types';

// TODO: update this component to match the design in public/mockups/amigo-counter.png
export default function PetCounter(frank) {
  const { images, numberOfPets } = frank;
  return (
    <div className="bg-rose-500">
      <div className="todo-update-this-class">
        {images.map((image, index) => (
          <img 
              key={index}
              src={image}
              alt={`Pet ${index + 1}`}
              className="-ml-3" />
        ))}
      </div>
      <span className="italic">
        <strong> 
          {numberOfPets}  amigos&nbsp;
        </strong> 
        na sua cidade
      </span>
    </div>
  );
};

PetCounter.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberOfPets: PropTypes.number.isRequired,
};
