import artsAndCulture from '../../../static/assets/imgs/artsAndCulture.png';
const WWD: React.FC = () => {
  return (
    <section>
      <h2>What we do</h2>
      <span>
        <div>
          <img className="h-15" src={artsAndCulture} alt="Culture" />
        </div>
        <div>
          <h3>Promote Asian pop Culture</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud tempor ut exercitation ulco laboris.
          </p>
        </div>
      </span>
    </section>
  );
};
export default WWD;
