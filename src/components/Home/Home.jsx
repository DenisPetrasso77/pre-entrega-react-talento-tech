import "./Home.css";

export const Home = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <h1>¡Bienvenido a la Tienda Oficial de Attaque 77!</h1>
        <h2>
          Acá vas a encontrar toda la discografía, remeras exclusivas y mucho más.
          Elegí en el menú lo que querés ver.
        </h2>
        <img
          src="/images/banner.jpg"
          alt="Attaque 77 Bienvenida"
          className="home-banner"
        />
      </div>
    </section>
  );
};
