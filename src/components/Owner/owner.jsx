import './Owner.scss';

const Owner = ({ host }) => {
  return (
    <div className="owner">
      <div className="owner__name">{host.name}</div>
      <img className="owner__picture" src={host.picture} alt={host.name} />
    </div>
  );
};

export default Owner;
