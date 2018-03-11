import React, { Component } from 'react';
import './styleregistro.css';

class Registrarse extends Component {

    render() {

        return (

            <div clasName="Registrarse">
                <h1>Reegistrarse</h1>
                <div id="contenedor">
                    <div id="pelicula">
                        <div id="infopelicula">
                            <div id="imagepelicula">
                                <img src="http://sm.ign.com/t/ign_latam/gallery/n/new-black-/new-black-panther-character-posters_9hdz.640.jpg" class="image" />
                            </div>
                            <div class="sinopsisPelicula">
                                <p>
                                    este espacio se usará para colocar la sinopsis de la pelicula.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div class="registro">
                        <div class="container">
                            <div class="panel">
                                <div class="iconoRegistro">
                                    <span class="	glyphicon glyphicon-knight"></span>
                                </div>
                                <div class="gipco">
                                    <h1>GIPCO</h1>
                                    <p>
                                        Gestiona tus peliculas y descubre buenas recomendaciones ajustadas solamente a ti con base en lo que has visto
                                       Bienvenido, llena tus datos para entrar
                                    </p>
                                </div>

                                <form>

                                    <div class="input-container">
                                        <input type="text" id="correo" required="required" />
                                        <label for="correo">Correo </label>
                                        <div class="bar"></div>
                                    </div>
                                    <div class="input-container">
                                        <input type="text" id="usuario" required="required" />
                                        <label for="usuario">Usuario</label>
                                        <div class="bar"></div>
                                    </div>
                                    <div class="input-container">
                                        <input type="password" id="Password" required="required" />
                                        <label for="Password">Password</label>
                                        <div class="bar"></div>
                                    </div>
                                    <div class="button-container">
                                        <button>Registro</button>
                                    </div>

                                </form>


                            </div>
                        </div>
                    </div>


                </div>




                <div class="form-group row">
                    <div class="col-xs-2">
                        <label for="ex1">Usuario</label>
                        <input class="form-control" id="ex1" type="text" />
                    </div>
                    <div class="col-xs-3">
                        <label for="ex2">Contraseña</label>
                        <input class="form-control" id="ex2" type="text" />
                    </div>
                    <div class="col-xs-4">
                        <label for="ex3">Correo</label>
                        <input class="form-control" id="ex3" type="text" />
                    </div>
                </div>



                <div id="contenedor">
                    <h1>GIPCO</h1>
                    <p>
                        Gestiona tus peliculas y descubre buenas recomendaciones ajustadas solamente a ti con base en lo que has visto
                        Bienvenido, llena tus datos para entrar
</p>
                    <div class="form-group">

                        <label for="u1">Usuario: </label>
                        <input type="usuario" class="form-control" placeholder="ingrese su usuario" />

                    </div>
                    <div class="separar">
                        <div class="form-group">
                            <label for="pwd">Contraseña: </label>
                            <input type="password" class="form-control" />
                        </div>
                        <div class="form-group row">
                            <label for="pwd">Correo eléctronico </label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>

                    <button type="submit" class="alinear">Registrarse</button>

                </div>
            </div>






        );
    }
}
export default Registrarse;