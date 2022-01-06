import React from "react";
import { NavLink } from 'react-router-dom'
import {
Box,
Container,
Row,
Column,
Heading,
} from "./FooterStyles";

const Footer = () => {
    const linkStyles = {
        color: "#fff",
        marginBottom: "20px",
        fontSize: "18px",
        textDecoration: "none",

        // &:hover {
        //     color: "green",
        //     transition: "200ms ease-in",
        // }
    }
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Accesos rápidos</Heading>
			<li><NavLink style={linkStyles} to="/">Inicio</NavLink></li>
			<li><NavLink style={linkStyles} to="/login">Registrate o Iniciá sesión</NavLink></li>
			<li><NavLink style={linkStyles} to="/cart">Carrito</NavLink></li>
		</Column>		<Column>
			<Heading>Categorías</Heading>
			<li><NavLink style={linkStyles} to="/Category/1">Mates</NavLink></li>
			<li><NavLink style={linkStyles} to="/Category/2">Bombillas</NavLink></li>
			<li><NavLink style={linkStyles} to="/Category/3">Yerbas</NavLink></li>
			<li><NavLink style={linkStyles} to="/Category/4">Kits y Accesorios</NavLink></li>
		</Column>		<Column>
			<Heading>Contactanos</Heading>
			<li><NavLink style={linkStyles} to="/contact">Envianos un mail!</NavLink></li>
			<li><a style={linkStyles} href="https://api.whatsapp.com/send?phone=5491163648773&text=Hola!%20Me%20interesa%20el%20producto%20...">Envianos un WhatsApp!</a></li>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
