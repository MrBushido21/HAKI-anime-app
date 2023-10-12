import logo from '../img/HAKI-logo.png';
type PropsType = {}
export const Logo = ({}:PropsType) => {
return (
    <section className="Logo">
    <div className="container">
      <img src={logo} alt="" />
    </div>
  </section>
);
}