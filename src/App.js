
import {useRef} from "react";
import './App.css';

window.onbeforeunload = function () {
  window.scrollTo(0,0);
};

function App() {
  const inicio = useRef(null);
  const aptitudes = useRef(null);
  const servicio = useRef(null);
  const contacto = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
  function openHeader() {
    document.getElementById("header").style.left = "0";
  }
  function closeHeader() {
    document.getElementById("header").style.left = "-47vw";
  }
  return (

    <div className="App">
      
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
     
      <header id="header">
        
      <i class="bi bi-x" id="close" onClick={closeHeader}></i>
      <link rel="stylesheet" href="https://kit.fontawesome.com/36bc13809e.css" crossorigin="anonymous"></link>
        <div className="header">
      <img src='logo.jpg' alt="logo" width="65%"></img>
      <h1>Tomás Sitta</h1>
      <p>Desarrollador Web</p>
      <hr></hr>
      <div className="info">
      <i class="bi bi-house"></i>CABA , Argentina
      <br></br>
      <i class="bi bi-envelope"></i>410toms@gmail.com
      <br></br>
      <i class="bi bi-telephone"></i>+54 9 11 5851-9330
      </div>
       
      <div className="info2">
      <i  class="bi bi-chat"></i>Idiomas :</div>
      <div className="idiomas">
      <p>Español</p>
<div class="container-skill">
  <div class="idioma espanol"></div>
</div>
<p>Inglés</p>
<div class="container-skill">
  <div class="idioma ingles"></div>
</div>
<p>Francés</p>
<div class="container-skill">
  <div class="idioma frances"></div>
</div>
      </div>
      </div>
      </header>
      <i class="bi bi-list" id="infobtn" onClick={openHeader}></i>

      <nav className="navbar">
      <ul>
          <li onClick={() => scrollToSection(inicio)} className="link"><div className="but" class="tooltip"><span class="tooltiptext">Inicio</span><i class="bi bi-person-fill"></i></div></li>
          <li onClick={() => scrollToSection(aptitudes)} className="link"><div className="but" class="tooltip"><span class="tooltiptext">Skills</span><i class="bi bi-wrench"></i></div></li>
          <li onClick={() => scrollToSection(servicio)} className="link"><div className="but" class="tooltip"><span class="tooltiptext">Servicios</span><i class="bi bi-pencil-square"></i></div></li>
          <li onClick={() => scrollToSection(contacto)} className="link"><div className="but" class="tooltip"><span class="tooltiptext">Contacto</span><i class="bi bi-telephone-fill"></i></div></li>
        </ul>
      </nav>
      <div className="container">

      <section ref={inicio} className="inicio">
      <img  className="inicio-img" src='background.jpg' alt="background"></img>
    <div data-aos="fade-right"data-aos-duration="1000" data-aos-delay="500" className="inicio-container" >
    <h3>Hola, mi nombre es</h3><h2>Tomás Sitta</h2>
    <h4>Soy desarrollador web y tengo conocimientos de front y backend</h4>
    <p>Todo lo que sé de programación lo aprendí en la UTN y actualmente estoy cursando la carrera de Diseño Gráfico en FADU.</p>
    <div data-aos="fade-in" data-aos-duration="1500" data-aos-delay="3000" className="mas">
    <i onClick={() => scrollToSection(aptitudes)} class="bi bi-arrow-down-circle-fill"></i><h1 >Más sobre mí</h1>
    </div>
    </div>
    
   

      </section>
      <section ref={aptitudes} className="aptitudes">
        <div className="aptitudes-container">
        <h1 data-aos="zoom-in" data-aos-duration="1000" >Skills</h1>
        <div className="skills">
          <div data-aos="flip-left" data-aos-duration="1500" data-aos-delay="500" className="skill">
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 16 16"><path fill="currentColor" d="M.946 0L2.23 14.4L7.992 16l5.777-1.602L15.055 0H.947zM12.26 4.71H5.502l.161 1.809H12.1l-.485 5.422l-3.623 1.004l-3.618-1.004l-.247-2.774H5.9l.126 1.41l1.967.53l.004-.001l1.968-.531l.204-2.29H4.048l-.476-5.341h8.847l-.158 1.766z"/></svg>
        <p>HTML</p>
        </div>
        <div data-aos="flip-left" data-aos-duration="1500" data-aos-delay="500" className="skill">
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsJavascriptFill0)"><path fill="currentColor" fill-rule="evenodd" d="M0 0h24v24H0V0Zm18.347 20.12c-1.113 0-1.742-.58-2.225-1.37l-1.833 1.065c.662 1.308 2.015 2.306 4.11 2.306c2.142 0 3.737-1.112 3.737-3.143c0-1.883-1.082-2.72-2.998-3.543l-.564-.241c-.968-.42-1.387-.693-1.387-1.37c0-.547.42-.966 1.08-.966c.647 0 1.064.273 1.451.966l1.756-1.127c-.743-1.307-1.773-1.806-3.207-1.806c-2.014 0-3.303 1.288-3.303 2.98c0 1.835 1.08 2.704 2.708 3.397l.564.242c1.029.45 1.642.724 1.642 1.497c0 .646-.597 1.113-1.531 1.113Zm-8.74-.015c-.775 0-1.098-.53-1.452-1.16l-1.836 1.112c.532 1.126 1.578 2.06 3.383 2.06c1.999 0 3.368-1.063 3.368-3.398v-7.7h-2.255v7.67c0 1.127-.468 1.416-1.209 1.416Z" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsJavascriptFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
<p>JavaScript</p>
        </div>
        <div data-aos="flip-left" data-aos-duration="1500" data-aos-delay="500" className="skill">
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="m1.5 0l1.594 18.056L10 20l6.906-1.944L18.5 0h-17Zm13.577 5.852L9.994 8.125l-.013.005h4.917l-.563 6.762l-4.334 1.323l-.007-.003v.003l-4.358-1.348l-.28-3.405h2.162l.14 1.764l2.316.611l.02-.006v.003l2.397-.706l.164-2.842l-2.561-.008l-4.78-.016l-.163-2.132l4.943-2.153l.288-.125H4.864l-.259-2.18h10.683l-.211 2.18Z"/></svg>
        <p>CSS</p>
        </div>
        <div data-aos="flip-left" data-aos-duration="1500" data-aos-delay="500" className="skill">
       <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 32 32"><path fill="currentColor" d="m25 11.6l-.9-.3c0-.2.1-.4.1-.6c.7-3.3.2-6-1.3-6.9c-1.5-.8-3.9 0-6.3 2.1c-.2.2-.5.4-.7.6c-.2-.1-.3-.3-.5-.4C13 3.9 10.5 3 9 3.9c-1.5.8-1.9 3.4-1.3 6.5c.1.3.1.6.2.9c-.4.1-.7.2-1 .3c-3 1-4.9 2.7-4.9 4.3c0 1.7 2 3.5 5.1 4.5c.2.1.5.2.8.2c-.1.3-.2.7-.2 1c-.6 3.1-.1 5.5 1.3 6.4c1.5.9 4 0 6.5-2.2c.2-.2.4-.4.6-.5c.2.2.5.5.8.7c2.4 2.1 4.7 2.9 6.2 2c1.5-.9 2-3.5 1.4-6.7c0-.2-.1-.5-.2-.8c.2-.1.4-.1.5-.2c3.2-1.1 5.3-2.8 5.3-4.5c-.1-1.5-2.1-3.1-5.1-4.2zm-7.5-4.7c2.1-1.8 4-2.5 4.9-2c.9.5 1.3 2.7.7 5.6c0 .2-.1.4-.1.6c-1.2-.3-2.5-.5-3.7-.6c-.7-1-1.5-2-2.4-3l.6-.6zm-7.2 10.5c.3.5.5 1 .8 1.5c.3.5.6 1 .9 1.4c-.9-.1-1.7-.2-2.6-.4c.2-.8.5-1.6.9-2.5zm0-2.8c-.4-.8-.6-1.6-.9-2.4c.8-.2 1.7-.3 2.5-.4c-.3.5-.6.9-.9 1.4c-.2.4-.5.9-.7 1.4zm.6 1.4c.4-.8.8-1.5 1.2-2.3c.4-.7.9-1.5 1.4-2.2c.8-.1 1.7-.1 2.6-.1c.9 0 1.7 0 2.6.1c.5.7.9 1.4 1.3 2.2c.4.7.8 1.5 1.2 2.3c-.4.8-.8 1.5-1.2 2.3c-.4.7-.9 1.5-1.3 2.2c-.8.1-1.7.1-2.6.1c-.9 0-1.7 0-2.5-.1c-.5-.7-.9-1.4-1.4-2.2c-.5-.8-.9-1.5-1.3-2.3zm10 2.9c.3-.5.6-1 .8-1.5c.4.8.7 1.6.9 2.5c-.9.2-1.7.3-2.6.4c.4-.5.7-1 .9-1.4zm.8-4.3c-.3-.5-.5-1-.8-1.5c-.3-.5-.6-.9-.8-1.4c.9.1 1.7.3 2.6.4c-.3.9-.6 1.7-1 2.5zM16 8.3c.6.6 1.1 1.3 1.6 2c-1.1-.1-2.2-.1-3.3 0c.6-.7 1.2-1.4 1.7-2zM9.6 4.9c.9-.5 3 .2 5.2 2.2l.4.4c-.9.9-1.7 1.9-2.4 3c-1.3.1-2.5.3-3.7.6c-.1-.3-.1-.6-.2-.9c-.6-2.7-.2-4.8.7-5.3zM8.2 19.6c-.2-.1-.5-.1-.7-.2c-1.4-.5-2.5-1.1-3.3-1.7c-.7-.6-1-1.2-1-1.7c0-1 1.5-2.3 4.1-3.2c.3-.1.6-.2 1-.3c.3 1.2.7 2.4 1.3 3.5c-.6 1.2-1 2.4-1.4 3.6zm6.5 5.5c-1.1 1-2.2 1.6-3.1 2c-.9.3-1.5.3-2 .1c-.9-.5-1.3-2.5-.8-5.1c.1-.4.2-.7.2-1.1c1.2.3 2.5.5 3.8.5c.7 1 1.5 2 2.4 3c-.2.2-.3.4-.5.6zm1.3-1.4c-.6-.6-1.1-1.3-1.7-2h3.3c-.4.7-1 1.4-1.6 2zm7.3 1.7c-.2.9-.5 1.5-.9 1.7c-.9.5-2.8-.2-4.8-1.9c-.2-.2-.5-.4-.7-.6c.8-.9 1.6-1.9 2.3-3c1.3-.1 2.5-.3 3.8-.6c.1.2.1.5.2.7c.3 1.4.3 2.7.1 3.7zm1-6c-.2 0-.3.1-.5.1c-.4-1.2-.9-2.4-1.4-3.6c.5-1.1 1-2.3 1.4-3.5c.3.1.6.2.8.3c2.6.9 4.2 2.2 4.2 3.2c0 1.2-1.7 2.6-4.5 3.5z"/><path fill="currentColor" d="M16 18.5c.5 0 1-.1 1.4-.4c.4-.3.7-.7.9-1.1c.2-.5.2-1 .1-1.5s-.3-.9-.7-1.3c-.3-.4-.8-.6-1.3-.7c-.5-.1-1 0-1.5.1c-.5.2-.9.5-1.1.9c-.3.4-.4.9-.4 1.4c0 .3.1.7.2 1c.1.3.3.6.5.8c.2.2.5.4.8.5c.4.2.8.3 1.1.3z"/></svg>
       <p>React</p>
        </div>
        <div data-aos="flip-left" data-aos-duration="1500" data-aos-delay="500" className="skill">
        <svg xmlns="http://www.w3.org/2000/svg"width="5em" height="5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466c0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268c-.407 1.319-.463 2.937-.42 4.186c.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5c.043-1.249-.013-2.867-.42-4.186c-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268c.408-1.319.464-2.937.42-4.186c-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5c-.043 1.249.013 2.867.42 4.186c.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213c0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"/></svg>
        <p>Bootstrap</p>
        </div>
        <div data-aos="flip-left" data-aos-duration="1500" data-aos-delay="500" className="skill">
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><g id="feGit0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="feGit1" fill="currentColor"><path id="feGit2" d="M21.623 11.11L12.89 2.376a1.288 1.288 0 0 0-1.821 0L9.256 4.191l2.3 2.3a1.53 1.53 0 0 1 1.937 1.95l2.217 2.217a1.532 1.532 0 1 1-.918.864l-2.068-2.068v5.441a1.533 1.533 0 1 1-1.26-.045V9.36a1.532 1.532 0 0 1-.832-2.01L8.365 5.081l-5.988 5.987a1.289 1.289 0 0 0 0 1.822l8.733 8.732a1.288 1.288 0 0 0 1.821 0l8.692-8.692a1.288 1.288 0 0 0 0-1.822"/></g></g></svg>
        <p>GitHub</p>
        </div>
        </div>
        <hr data-aos="zoom-in"  data-aos-duration="1000" data-aos-delay="750"></hr>

        <div className="skills">
          <div data-aos="flip-right" data-aos-duration="1500" data-aos-delay="1000" className="skill">
          <svg xmlns="http://www.w3.org/2000/svg" width="4.5em" height="4.5em" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M172.049 108.008h53.334l76.693 256.941H255.75l-19.076-73.189h-74.746l-19.466 73.19h-40.877l70.465-244.873v-12.069zm54.113 145.99L199.689 145.38l-27.251 108.616h53.724zm155.333-80H339.45V364.95h42.045V174zM359.93 99.811c-13.621 0-24.663 10.915-24.663 24.38s11.042 24.381 24.663 24.381s24.664-10.915 24.664-24.38s-11.042-24.381-24.664-24.381zM512 512H0V0h512v512z" clip-rule="evenodd"/></svg>
           <p>Illustrator</p>
        </div>
        <div data-aos="flip-right" data-aos-duration="1500" data-aos-delay="1000" className="skill">
        <svg xmlns="http://www.w3.org/2000/svg" width="4.5em" height="4.5em" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M512 512H0V0h512v512zM406.41 217.014v-39.71c-6.54-2.912-43.991-13.625-73.578-2.335c-42.62 16.262-41.089 65.252-24.916 84.479c20.955 24.912 73.082 34.2 64.552 58.652c-4.417 12.662-25.038 14.866-43.218 10.615c-16.93-3.958-31.65-13.986-31.65-13.986v42.045s14.55 8.112 32.408 10.042c22.893 2.473 51.589-2.197 65.965-14.975c25.59-22.747 29.52-73.137-18.975-96.536c-40.355-19.47-39.691-25.027-39.408-35.014c.38-13.376 28.464-21.61 68.82-3.277zM188.79 105.575c33.577 1.168 82.922 16.643 82.922 82.63s-60.374 87.64-115.463 82.922v93.433H115.21V106.45s40.001-2.043 73.579-.875zm10.657 124.675c17.696-6.457 29.198-20.338 29.198-41.9c0-22.861-11.705-38.342-29.607-42.715c-19.386-4.737-42.789-1.945-42.789-1.945v90.044s32.395.458 43.198-3.484z" clip-rule="evenodd"/></svg>
         <p>Photoshop</p>
        </div>
        <div data-aos="flip-right" data-aos-duration="1500" data-aos-delay="1000" className="skill">
        <svg xmlns="http://www.w3.org/2000/svg" width="4.5em" height="4.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M389.186 214.341c4.678 8.911 6.247 18.416 6.107 28.248h-67.587c4.105-26.449 14.979-42.58 36.555-42.095c12.549 0 20.857 4.622 24.925 13.847zm-248.688 36.002H198.1l-29.909-112.99c-3.756 25.557-16.927 69.1-27.693 112.99zM512 0v512H0V0h512zM274.413 365.548L195.228 98.582h-54.73c0 5.92-.38 12.376-1.108 14.955c-.744 2.596-1.108 4.985-1.108 7.2L68.336 365.548h41.384l19.7-75.326h77.543l21.684 75.326h45.766zm161.852-120.744c0-17.724-5.176-35.447-15.508-53.171c-10.35-17.724-28.802-26.586-55.388-26.586c-25.858 0-45.971 10.16-60.371 30.463C277.833 231.333 275 299 303.89 338.408c13.656 20.32 36.365 30.464 68.126 30.464c17.393-.044 33.978-2.142 48.74-8.863c1.723-1.774 2.168-2.616 2.216-5.539v-29.909c-.05-2.074-1.187-2.16-3.323-2.214c-21.615 10.563-53.033 10.187-68.928 1.022c-14.79-8.527-23.485-26.35-23.015-47.547h63.141c11.078 0 19.94-.174 26.586-.554c6.647-.364 11.44-.918 14.4-1.662c.728 0 1.282-.174 1.662-.554l1.662-1.662c0-2.215.173-5.712.554-10.524c.363-4.794.554-10.142.554-16.062z"/></svg>
         <p>After Effects</p>
        </div>
        <div data-aos="flip-right" data-aos-duration="1500" data-aos-delay="1000" className="skill">
        <svg xmlns="http://www.w3.org/2000/svg" width="4.5em" height="4.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M265.301 269.334c-1.24-39.937 26.821-71.547 67.562-60.916v122.94c-40.599 9.808-69.274-14.325-67.562-62.024zM0 0v512h512V0H0zm177.804 369.014H134.61v-266.92h43.194v266.92zm135.122 3.322c-49.296 1.424-92.89-29.841-91.927-100.787c.774-57.015 36.303-108.212 111.864-103.002v-66.453h44.302v239.785c0 4.067.37 9.887 1.363 14.713c-17.01 9.418-39.047 15.574-65.602 15.744z"/></svg>
         <p>InDesign</p>
        </div>
        <div data-aos="flip-right" data-aos-duration="1500" data-aos-delay="1000" className="skill">
        <svg xmlns="http://www.w3.org/2000/svg" width="4.5em" height="4.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M0 0v512h512V0H0zm264.095 237.798c-18.461 26.616-55.42 40.048-106.423 37.639v97.132H114.13V103.5l65.872-1.116c54.756-2.06 96.733 26.942 97.133 84.852c-.472 20.392-3.909 37.4-13.04 50.563zm142.551-29.35c-.053 1.732-.938 2.274-2.233 2.233c-16.247-1.473-32.992 1-46.891 4.466v157.422h-43.544V214.03c.175-9.395-.341-16.216-1.116-23.446c-.164-.827-.19-2.562 2.233-3.35c21.767-7.895 54.646-17.423 89.318-16.746c1.37-.007 2.222.61 2.233 2.233v35.727zm-174.17-20.097c.051 13.428-2.17 23.026-7.294 29.907c-13.199 17.723-39.21 17.42-47.412 18.102h-20.098v-94.9h23.446c38.09.267 50.778 19.538 51.358 46.891z"/></svg>
         <p>Premiere</p>
        </div>
        </div>

        </div>
      </section>
      <section ref={servicio} className="servicios">
        <h1 data-aos="zoom-in" data-aos-duration="1000">Servicios</h1>
        <div className="servicios-container">
        <div data-aos="flip-up" data-aos-duration="1500" data-aos-delay="500" className="servicio">
        <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="6em" viewBox="0 0 24 24"><path fill="white"  d="M20.97 7.27a.996.996 0 0 0 0-1.41l-2.83-2.83a.996.996 0 0 0-1.41 0l-4.49 4.49l-3.89-3.89c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l3.89 3.89L3 16.76V21h4.24l4.52-4.52l3.89 3.89c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-3.89-3.89l4.48-4.48zM5.04 6.94l1.89-1.9L8.2 6.31L7.02 7.5l1.41 1.41l1.19-1.19l1.2 1.2l-1.9 1.9l-3.88-3.88zm11.23 7.44l-1.19 1.19l1.41 1.41l1.19-1.19l1.27 1.27l-1.9 1.9l-3.89-3.89l1.9-1.9l1.21 1.21zM6.41 19H5v-1.41l9.61-9.61l1.3 1.3l.11.11L6.41 19zm9.61-12.44l1.41-1.41l1.41 1.41l-1.41 1.41l-1.41-1.41z"/></svg>
        <h2>Diseño creativo<p>Creación de productos digitales en base a las necesidades del cliente</p></h2>
          </div>
          <div data-aos="flip-up" data-aos-duration="1500" data-aos-delay="750" className="servicio">
          <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="6em" viewBox="0 0 48 48"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M21 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V21"/><path d="M24 34V42"/><path d="M32 6L28 10L32 14"/><path d="M38 6L42 10L38 14"/><path d="M14 42L34 42"/></g></svg>
          <h2>Desarrollo responsive<p>Diseño personalizado de sitios con experiencias amigables para los usuarios</p></h2>
          </div>
          <div data-aos="flip-up" data-aos-duration="1500" data-aos-delay="1000" className="servicio">
          <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="6em" viewBox="0 0 48 48"><defs><path id="ipODatabasePoint0" d="M39 9c0 2.761-6.716 5-15 5c-8.284 0-15-2.239-15-5s6.716-5 15-5c8.284 0 15 2.239 15 5Z"/><path id="ipODatabasePoint1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 9c0 2.761-6.716 5-15 5c-8.284 0-15-2.239-15-5s6.716-5 15-5c8.284 0 15 2.239 15 5Z"/></defs><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 36v-6m-4 10H6m22 0h14m-14 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0ZM39 9v16c0 2.761-6.716 5-15 5c-8.284 0-15-2.239-15-5V9"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 17c0 2.761-6.716 5-15 5c-8.284 0-15-2.239-15-5"/><use href="#ipODatabasePoint0"/><use href="#ipODatabasePoint0"/><use href="#ipODatabasePoint1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><use href="#ipODatabasePoint1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/></g></svg>
          <h2>Administración de datos<p>Gestión y manejo del almacenamiento y la investigación de base de datos</p></h2>
          </div>
        </div>
        
      </section>
      <section ref={contacto} className="contacto">
      <h1 data-aos="zoom-in" data-aos-duration="750">Contacto</h1>
        <div className="redes1">
          <div data-aos="flip-left" data-aos-duration="1500" data-aos-delay="500" className="red">
          <svg xmlns="http://www.w3.org/2000/svg" width="5.5em" height="5.5em" viewBox="0 0 32 32"><path fill="currentColor" d="M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7zM11.1 24.4H7.6V13h3.5v11.4zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1c0-1.2.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1zm15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z"/></svg>
          <h2>Linkedin<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tomas-sitta/"><p>/in/tomas-sitta/</p></a></h2>
          </div>
          <div data-aos="flip-left" data-aos-duration="1500" data-aos-delay="750" className="red">
          <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><path fill="currentColor" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"/></svg>
          <h2>Correo<p>410toms@gmail.com</p></h2>
          </div>
          </div>
          <div className="redes2">
          <div data-aos="flip-left" data-aos-duration="1500" data-aos-delay="1000" className="red">
          <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/></svg>
          <h2>Teléfono<p>+54 9 11 5851-9330</p></h2>
          </div>
          <div data-aos="flip-left" data-aos-duration="1500" data-aos-delay="1250" className="red">
          <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 20 20"><g fill="currentColor"><path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01Z"/><path fill-rule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86c-1.12 0-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24c.06.06.15.1.24.1h3.38c.09 0 .18-.04.24-.1c.06-.06.1-.15.1-.24v-.51ZM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2v-15Zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001a.041.041 0 0 0-.012-.006Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1Z" clip-rule="evenodd"/></g></svg>
          <h2>Curriculum<a target="_blank"  rel="noopener" href="Tomás-Sitta-cv.pdf"><p>Descargar</p></a></h2>
          </div>
          </div>
        
      </section>
      
    </div>
    <footer><p>¡Gracias por tu interés! Si queres que sea parte de<br></br> tu próximo proyecto contactáte conmigo.</p></footer>
    </div>
    
  );
}

export default App;
