import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/TDF_logo.png';

function RaceLogo() {
    return <Link to={'/'}><img src={logo} alt='TDF Logo' /></Link>
}

export default RaceLogo;