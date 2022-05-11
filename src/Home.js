import { useContext } from 'react'
import './Home.css'
import AuthContext from './contexts/AuthContext'
import { logoutAdministratorHandler } from './handlers/administratorAuthenticationHandler'

const Home = () => {

    const context = useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();
        try {
            logoutAdministratorHandler().then((res) => {
                if (res.status === 200) {
                    context.handleLogout();
                    window.location.href = '/';
                } else {
                    console.log(res);
                    alert("An error occurred.");
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div class='container-fluid' id="header-position">
            <div class='row' id='Header-color'>
                <div class='col d-flex justify-content-end'>
                    <h1 id='Home-header'>RUM Services Locator</h1>
                </div>
                <div class='col d-flex justify-content-end' id='Home-button'>
                        <button class='btn btn-primary btn-success' onClick={(e) => handleLogout(e)}>Cerrar Sesión</button>
                </div>
            </div>
        </div>
    );
}

export default Home;