import React from 'react';
import './assets/css/layout/back.css';
import './assets/css/vendor/bootstrap.min.css';
import './assets/css/vendor/font-awesome.css';
import './assets/css/vendor/slick-theme.css';
import './assets/css/vendor/slick.css';
import './assets/css/app.css';
import './assets/js/vendor/bootstrap.min.js';
import './assets/js/vendor/jquery-3.6.3.min.js';
import './assets/js/vendor/jquery-appear.js';
import './assets/js/vendor/jquery-validator.js';
import './assets/js/vendor/slick.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import.meta.env.BASE_URL
import './assets/js/app.js'; // Asegúrate de importar tus estilos CSS aquí



function translatePage() {
  // Simula el clic en el contenedor de Google Translate para abrir el menú de selección de idioma
  const googleTranslateElement = document.querySelector('.goog-te-combo');
  if (googleTranslateElement) {
    googleTranslateElement.click();
  }
}

function Navbar() {
  return (
    <header id="navbar" className="large-screens navbar-container mb-4" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', background: 'linear-gradient(180deg, #E8F3FF 0%, #EAFFEA 100%)' }}>
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/"><img alt="" src="src/assets/media/icons/c-removebg-preview.png" className="logo-img" style={{ width: '100px', height: 'auto' }} /></a>
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-collapse justify-content-end">
            <ul className="navbar-nav mainmenu">
              <li className="nav-item"><a className="nav-link text-black" href="#services">Projects</a></li>
              <li className="nav-item"><a className="nav-link text-black" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link text-black" href="#experience">Testimonials</a></li>

              <li className="nav-item"><button className="nav-link btn btn-primary text-white" onClick={translatePage}>Traducir Página</button></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}






function MobileNavbar() {
  return (
    <header className="small-screen" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}> {/* Agrega una sombra de color negro con opacidad */}
      <div className="container">
        <div className="mobile-menu">
          <a className="navbar-brand" href="/"><img alt="" src="assets/media/icons/logo_trial.png" /></a>
          <div className="hamburger-menu">
            <div className="bar"></div>
          </div>
        </div>
        <nav className="mobile-navar d-xl-none">
          <ul>
            <li className="menu-item"><a href="#services">Services</a></li>
            <li className="menu-item"><a href="#skills">Skills</a></li>
            <li className="menu-item"><a href="#experience">Testimonials</a></li>
            <li className="menu-item"><a href="#contact">Contact me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Header() {
  return (
    <header id="headermain" className="mb-4 text-center" style={{ backgroundImage: `url('src/assets/media/banner/banner2.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}> {/* Agrega un margen inferior y centra el texto */}
      <div className="container">
        <div className="row headerwrap">
          <div className="col-lg-6 align-items-center" style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'space-evenly', alignItems: 'center' }}>
            {/* Texto a la izquierda */}
            <div className="headerwrap__text text-right" style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'space-evenly', alignItems: 'center' }}> {/* Alinea el texto a la derecha y aplica las características */}
              <h1 style={{ fontSize: '2.5rem' }}>Luis David Inguilan Guzman</h1> {/* Aumenta el tamaño de la fuente */}
               {/* Párrafo movido debajo del título */}
              <p>Your trusted engineer</p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            {/* Logo */}
            <div className="headerwrap__logo rounded-circle overflow-hidden" style={{ padding: '100px' }}> {/* Añade padding personalizable */}
              <img src="src\assets\media\icons\giphy.gif" alt="logo" className="img-fluid rounded-circle" style={{ width: '300px', height: '300px' }} /> {/* Agrega bordes redondos */}
            </div>
          </div>
          {/* Icono de navegación para dispositivos móviles */}
          <div className="col-lg-2 d-block d-lg-none">
            <div className="navicon">
              <div className="navicon__bar"></div>
            </div>
          </div>
          {/* Fin del icono de navegación */}
        </div>
      </div>
    </header>
  );
}



function HeroBanner() {
  const contactInfo = [
    { label: 'Email', value: 'dg4834307@gmail.com' },
    { label: 'Phone', value: '3235806283' },
    { label: 'Address', value: '11 Street, City, Pasto' }
  ];

  return (
    <section className="hero-banner bg-blue-transparent mb-4">
      <div className="heading mb-48">
        <div className="row">
          <div className="col-lg-12">
            <div className="content-block bg-gradient shadow br-30 p-4">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h1 className="mb-16" style={{ fontSize: '3rem' }}>David Inguilán</h1>
                  <h5 className="dark-gray mb-16">"Desarrollador de software comprometido con la excelencia y la innovación."</h5>
                  <ul className="contact-list mb-0">
                    {contactInfo.map((info, index) => (
                      <li className="text-black" key={index}>
                        <strong>{info.label}:</strong> {info.value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6">
                  <h2 className="mb-16">About Me</h2>
                  <h5 className="dark-gray mb-4">
                    "As a dedicated software engineer, I possess a strong academic background and an insatiable thirst for learning and growth in the technology realm. My objective is to contribute to the development of robust software solutions while continuously expanding my expertise in programming and staying abreast of emerging technologies and industry trends."
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects({ backgroundImage }) {
  return (
    <section className="services p-50" id="services" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${backgroundImage})`, padding: '0.1rem' }}>
      <div className="container">
        <div className="heading ">
          {/* Cambiar el tamaño de letra del título */}
          <h3 className="mb-20" style={{ fontSize: '5rem' }}>Projects</h3>
        </div>
        {/* Agrega un botón para regresar a la barra de navegación */}
        <a href="#navbar" className="btn-back-to-top">Back to Navigation</a>
        <div className="row">
          <div className="col-lg-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              {/* Cambiar el tamaño de letra del título */}
              <h4 className="mb-16" style={{ fontSize: '1.5rem' }}>Secure Password Generator</h4>
              <img src="src/assets/media/banner/passwordgenerator.webp" alt="Secure Password Generator" className="zoom-image" style={{ marginBottom: '20px' }} />
              {/* Cambiar el tamaño de letra del párrafo */}
              <p style={{ fontSize: '1rem' }}>Description: Program that generates secure passwords randomly and displays them to the user. Length and character types can be set. Technologies: Python with CLI or GUI using libraries such as Tkinter or PyQt.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              {/* Cambiar el tamaño de letra del título */}
              <h4 className="mb-16" style={{ fontSize: '1.5rem' }}>Azure database-driven coffee sales website</h4>
              <img src="src/assets/media/banner/cafeterias.webp" alt="Azure database-driven coffee sales website" className="zoom-image" style={{ marginBottom: '20px' }} />
              {/* Cambiar el tamaño de letra del párrafo */}
              <p style={{ fontSize: '1rem' }}>Description: A website to buy coffee with Azure cloud database. Technologies: HTML, CSS, JavaScript, Node.js or ASP.NET Core, SQL Database or Cosmos DB.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              {/* Cambiar el tamaño de letra del título */}
              <h4 className="mb-16" style={{ fontSize: '1.5rem' }}>Movie API using Django REST Framework</h4>
              <img src="src/assets/media/banner/apipeliculas.png" alt="Movie API using Django REST Framework" className="zoom-image" style={{ marginBottom: '20px' }} />
              {/* Cambiar el tamaño de letra del párrafo */}
              <p style={{ fontSize: '1rem' }}>Description: A movie API built with Django REST Framework. Technologies: Django REST Framework, Django ORM.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}









function Skills() {
  return (
    <section className="skills p-40" id="skills" style={{ padding: '4rem' }}>
      <div className="container">
        <div className="heading mb-20">
          {/* Nuevo elemento div con el cambio de tamaño de letra */}
          <div className="heading">
            <h3 className="mb-20" style={{ fontSize: '5rem' }}>Skills</h3>
          </div>
          {/* Fin del nuevo elemento div */}
          <h5>Empowering Expertise: My Skill Set in Focus.</h5>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20 d-flex flex-column">
              <div className="d-flex justify-content-end">
                <img
                  src="src/assets/media/banner/mysl1.png"
                  alt="MySQL Logo"
                  className="logo rounded-circle shadow-sm"
                  style={{ maxWidth: '30%', height: 'auto', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div>
                <h4 className="mb-16">MySql</h4>
                <p>Expert in MySQL, efficiently manage relational databases to create robust and scalable storage systems.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20 d-flex flex-column">
              <div className="d-flex justify-content-end">
                <img
                  src="src/assets/media/banner/ts.png"
                  alt="MySQL Logo"
                  className="logo rounded-circle shadow-sm"
                  style={{ maxWidth: '30%', height: 'auto', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div>
                <h4 className="mb-16">TypeScript</h4>
                <p>Proficiency in TypeScript, empowering JavaScript programming with a static type system to develop more secure and reliable applications.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20 d-flex flex-column">
              <div className="d-flex justify-content-end">
                <img
                  src="src/assets/media/banner/python.png"
                  alt="MySQL Logo"
                  className="logo rounded-circle shadow-sm"
                  style={{ maxWidth: '30%', height: 'auto', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.6)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div>
                <h4 className="mb-16">Python</h4>
                <p>Outstanding Python skills, using it for a wide range of applications, from web development to artificial intelligence.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20 d-flex flex-column">
              <div className="d-flex justify-content-end">
                <img
                  src="src\assets\media\banner\imajava.jpg"
                  alt="MySQL Logo"
                  className="logo rounded-circle shadow-sm"
                  style={{ maxWidth: '30%', height: 'auto', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div>
                <h4 className="mb-16">JavaScript</h4>
                <p>Expertise in JavaScript, creating dynamic interactivity in web pages and developing both client-side and server-side applications</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20 d-flex flex-column">
              <div className="d-flex justify-content-end">
                <img
                  src="src/assets/media/banner/c_.png"
                  alt="MySQL Logo"
                  className="logo rounded-circle shadow-sm"
                  style={{ maxWidth: '30%', height: 'auto', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div>
                <h4 className="mb-16">C#</h4>
                <p>C# specialist, building high performance and scalable applications in the Microsoft ecosystem.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20 d-flex flex-column">
              <div className="d-flex justify-content-end">
                <img
                  src="src/assets/media/banner/nodejs.png"
                  alt="MySQL Logo"
                  className="logo rounded-circle shadow-sm"
                  style={{ maxWidth: '30%', height: 'auto', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div>
                <h4 className="mb-16">Node js</h4>
                <p>Solid experience in Node.js, leveraging its ability to develop fast and efficient web services.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Botón para regresar a la barra de navegación */}
        <a href="#navbar" className="btn-back-to-top">Back to Navigation</a>
      </div>
    </section>
  );
}





function Experience() {
  // Array de testimonios con fotos
  const testimonials = [
    {
      name: "Sofia Pedrozo",
      product: "Secure Password Generator",
      comment: "Awesome! This password generator is easy to use and offers customizable options. I feel more secure with strong passwords for my online accounts - highly recommended!",
      photoUrl: "src/assets/media/Señora.jpg" // URL de la foto de Sofia Pedrozo
    },
    {
      name: "Ricardo Cardona",
      product: "Azure database-driven coffee sales website",
      comment: "Amazing shopping experience! Wide selection of quality coffee, easy navigation and delicious coffee - my favorite online coffee shopping destination!",
      photoUrl: "src/assets/media/Señor1.jpg" // URL de la foto de Ricardo Cardona
    },
    {
      name: "Miguelito Revelo",
      product: "Movie API using Django REST Framework",
      comment: "Excellent API! Easy to integrate, clear documentation and responsive support. A valuable tool for any app developer.",
      photoUrl: "src/assets/media/Hombre.jpg" // URL de la foto de Miguelito Revelo
    }
  ];

  return (
    <section className="experience p-40" id="experience" style={{ padding: '0.1rem', marginBottom: '2rem' }}>
      <div className="container">
        <div className="heading mb-24">
          <h2 className="mb-16">Testimonials</h2>
          <h5>“Testimonials from my top clients back up the quality of my best work.”</h5>
        </div>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="content-block bg-gradient shadow br-30 p-20">
                <div className="testimonial-info d-flex flex-column align-items-center">
                  {/* Imagen del testimonio en la esquina superior izquierda */}
                  <img src={testimonial.photoUrl} alt={testimonial.name} className="testimonial-photo" />
                  <div className="testimonial-details text-center">
                    <h3 style={{ marginBottom: '10px' }}>{testimonial.name}</h3> {/* Puedes ajustar marginBottom */}
                    <h4 style={{ marginBottom: '10px' }}>{testimonial.product}</h4> {/* Puedes ajustar marginBottom */}
                    <p style={{ marginBottom: '10px' }}>{testimonial.comment}</p> {/* Puedes ajustar marginBottom */}
                    <div className="stars text-right mt-auto">
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container">
        <div className="content">
          <h6>Portafolio David inguilan.</h6>
          <ul className="social-icons unstyled d-flex justify-content-center">
            <li><a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer"><img src="/src/assets/media/icons/Behance.png" alt="Behance" style={{backgroundColor: "#1769FF"}} /></a></li>
            <li><a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer"><img src="/src/assets/media/icons/Dribbble.png" alt="Dribbble" style={{backgroundColor: "#EA4C89"}} /></a></li>
            <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src="/src/assets/media/icons/Twitter.png" alt="Twitter" style={{backgroundColor: "#1DA1F2"}} /></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src="/src/assets/media/icons/Linkedin.png" alt="Linkedin" style={{backgroundColor: "#0077B5"}} /></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/240px-Instagram_logo_2016.svg.png" alt="Instagram" style={{backgroundColor: "#E4405F", width: "28px", height: "28px"}} /></a></li>
            <li><a href="https://telegram.org/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" style={{backgroundColor: "#0088CC", width: "28px", height: "28px"}} /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}







function App() {
  return (
    <div className="bg-gray-100">
      <a href="#main-wrapper" id="backto-top" className="back-to-top">
        <i className="fas fa-angle-up"></i>
      </a>
      <div id="main-wrapper" className="main-wrapper overflow-hidden">
        <Navbar />
        <MobileNavbar />
        <Header />
        <HeroBanner />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}




export default App;
