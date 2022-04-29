import './Home.css'

function Home() {
    return (
        <div class='container-fluid' id="header-position">
            <div class='row' id='Header-color'>
                <div class='col d-flex justify-content-end'>
                    <h1 id='Home-header'>RUM Services Locator</h1>
                </div>
                <div class='col d-flex justify-content-end' id='Home-button'>
                    <a href='/Login_Screen'>
                        <button class='btn btn-primary btn-success'>Cerrar Sesión</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;