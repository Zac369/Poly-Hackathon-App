import React from 'react';
import AcctCircle from '../AcctCircle'
import { Container } from './NavBarElements';

import logo from './images/Meedayu_logo.png';

const NavBar = () => {

	return (	

			<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
				<img id="login-logo" src={logo} class="d-inline-block align-top" alt=""></img>     
				</a>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
				<li class="nav-item active">
					<a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/login">Login</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/profile">Profile</a>
				</li>
				{/* <li class="nav-item">
					<AcctCircle width="50px" height="50px"></AcctCircle>
				</li> */}
				</ul>
			</div>
			</nav>
		)
}

export default NavBar;