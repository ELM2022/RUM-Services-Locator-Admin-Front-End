import './Home.css'
// import { useNavigate } from 'react-router-dom'
import { logoutAdministratorHandler } from './handlers/administratorAuthenticationHandler'

const Home = () => {

    // const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        try {
            logoutAdministratorHandler().then((res) => {
                // if (res.status === 200) {
                //     navigate('/Login_Screen', { replace: true }); // Cannot use navigate hook because Home is not in a Route component
                // }

                // Handle navigation to Login Screen from the backend??
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
                    <a href='/Login_Screen'>
                        <button class='btn btn-primary btn-success' /*onClick={(e) => handleLogout(e)}*/>Cerrar Sesión</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;