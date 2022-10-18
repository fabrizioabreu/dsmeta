import icon from '../../assets/img/logo.svg'

import './styles.css'

function Heade(): JSX.Element {
  return (
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={icon} alt="DSMeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por
            <a href="https://www.instagram.com/fabrizioabreuu/">
              @fabrizio Abreu
            </a>
          </p>
        </div>
      </header>
    </>
  );
}

export default Heade;
