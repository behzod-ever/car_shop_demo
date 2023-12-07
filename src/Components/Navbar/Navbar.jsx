import React from 'react'
import Logo from "../../assets/Logo.png"
import { FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <img src={Logo} alt="" />

            <ul>
                <li><a>О нас</a></li>
                <li><a>Услуги</a></li>
                <li><a>Как купить</a></li>
                <li><a>Преимущества</a></li>
                <li><a>Отзывы</a></li>
                <li><a>Контакты</a></li>
            </ul>
            <div className="icons">
                <i><FaTelegram /></i>
                <i><RiWhatsappFill /></i>
                <i><FaYoutube /></i>
                <div className="tell">
                    <h4>+7 (8352) 67-52-52</h4>
                    <h4>+7 (8352) 67-52-52</h4>
                </div>
            </div>
            <div className="menu"><IoMenu /></div>
        </nav>
    )
}

export default Navbar