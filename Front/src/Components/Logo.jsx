import Swal from "sweetalert2";
import logo from "../lol/Logo.png";
import "./Logo.css"

const Logo = () => {

    const question = () =>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You go to page Official of League of Legends!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "Let's go!"
            }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'https://www.leagueoflegends.com/'; 
            }
            });
    }
    
        return (
            <img src={logo} alt="logo" onClick={() => question()} className="LogoImg"/>
        )
}

export default Logo;