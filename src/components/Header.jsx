import logo from '../assets/investment-calculator-logo.png';
export default function Header() {
    return (
      <div id="header">
        <img src={logo} alt="Logo" />
        <h1>React Investment Calculator</h1>
      </div>
    );
  }