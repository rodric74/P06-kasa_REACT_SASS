import './Owner.scss';

const Owner = ({ host }) => {
  // Split the name into first name and last name
  const [firstName, lastName] = host.name.split(' ');

  return (
    <div className="owner">
      <div className="owner__name">
        <div>{firstName}</div>
        <div>{lastName}</div>
      </div>
      <img className="owner__picture" src={host.picture} alt={host.name} />
    </div>
  );
};

export default Owner;
