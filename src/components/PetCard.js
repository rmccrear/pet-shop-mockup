import PropTypes from 'prop-types';

export default function PetCard ( props ) {

  return (
    <div className="bg-rose-100 border-2 border-rose-900 rounded-3xl p-3">
      <div className="mb-7 text-4xl">{props.emoji}</div>
      <div>
        {props.description}
      </div>
    </div>
  );

}

PetCard.propTypes = {
  emoji: PropTypes.string,
  description: PropTypes.string
};
