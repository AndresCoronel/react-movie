//Dependencies
import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import Contact from '../Contact/';

import './style.css';
/*(document).readyState(function () {
  ('.toggle').on('click', function () {
    ('.container').stop().addClass('active');
  });

  ('.close').on('click', function () {
    ('.container').stop().removeClass('active');
  });

});*/
class Loguin extends Component {

  render() {

    return (

      <div className="Loguin" >
        <div id="acontenedor" >
          <div id="peli">
            <div id="infopeli">
              <div id="imagepeli">
                <img src="http://sm.ign.com/t/ign_latam/gallery/n/new-black-/new-black-panther-character-posters_9hdz.640.jpg" class="image" />
              </div>
              <div id="sinopsis">
                <p>
                  este espacio se usará para colocar la sinopsis de la pelicula.
             </p>
              </div>
            </div>
          </div>

          <div id="login" class="login">

            <div class="container">

              <div class="container">
                <div class="card">
                  <div class="Icon">
                    <span class="glyphicon glyphicon-user"></span>
                  </div>
                  <div class="pen-title">
                    <h1>GIPCO</h1>
                    <p>
                      Gestiona tus peliculas y descubre buenas recomendaciones ajustadas solamente a ti con base en lo que has visto
                     Bienvenido, llena tus datos para entrar
                      </p>
                  </div>

                  <form>
                    <div class="input-container">
                      <input type="text" id="Username" required="required" />
                      <label for="Username">Username</label>
                      <div class="bar"></div>
                    </div>
                    <div class="input-container">
                      <input type="password" id="Password" required="required" />
                      <label for="Password">Password</label>
                      <div class="bar"></div>
                    </div>
                    <div class="button-container">
                      <button>Go</button>
                    </div>
                    <div class="footer"><a href="#">Forgot your password?</a></div>
                  </form>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

    );
  }
}
export default Loguin;