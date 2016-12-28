var yo = require('yo-yo');

module.exports = yo `<div class="container">
    <div class="row">
        <div class="col s10 push-s1">
            <div class="row">
                <div class="col m5 hide-on-small-only">
                    <img class="iphone" src="iphone.png" alt="">
                </div>
                <div class="col s12 m7">
                    <div class="row">
                        <div class="signup-box">

                            <h1 class="platzigram">Platzigram</h1>
                            <form action="" class="signup-form">
                                <h2>Registrare para ver fotos de tus amigos</h2>
                                <div class="section">
                                    <a href="" class="btn btn-fb hide-on-small-only">Iniciar sesion con facebook</a>
                                    <a href="" class="btn btn-fb hide-on-med-and-up">Iniciar sesion</a>

                                </div>
                                <div class="diver"></div>
                                <div class="section">
                                    <input type="email" name="email" placeholder="Correo Electronico">
                                    <input type="text" name="name" placeholder="Nombre completo">
                                    <input type="text" name="username" placeholder="Nombre de usuario">
                                    <input type="password" name="password" placeholder="Contraseña">
                                    <button class="btn waves-effect wave-ligth btn-signup" type="submit">Registrate</button>
                                </div>

                            </form>
                        </div>

                    </div>
                    <div class="row">
                        <div class="login-box">
                            Tienes una cuenta? <a href="/singin">Entrar</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
