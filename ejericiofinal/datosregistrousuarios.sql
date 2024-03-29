-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-06-2023 a las 19:41:07
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `datosregistrousuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_usuarios`
--

CREATE TABLE `tabla_usuarios` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL,
  `APELLIDO1` varchar(50) NOT NULL,
  `APELLIDO2` varchar(50) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `LOGIN` varchar(50) NOT NULL,
  `PASSWORD` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tabla_usuarios`
--

INSERT INTO `tabla_usuarios` (`ID`, `NOMBRE`, `APELLIDO1`, `APELLIDO2`, `EMAIL`, `LOGIN`, `PASSWORD`) VALUES
(1, 'Maria', 'Sanz', 'Gallego', 'gallegosanzm@gmail.com', 'MariaSanz', 'gallego2'),
(2, 'Felipe', 'Garcia', 'Valverde', 'valverdegarcia@yahoo.es', 'GarciaFelipe', 'Garcia_/'),
(3, 'Sonia', 'Valle', 'De Pablos', 'depablossonia@gmail.com', 'Sonia_depablos', 'Pablos_d'),
(4, 'Vanya', 'Atanasova', 'Marinova', 'marinovavanya@hotmail.com', 'VMarinova', 'VMA_587');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tabla_usuarios`
--
ALTER TABLE `tabla_usuarios`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tabla_usuarios`
--
ALTER TABLE `tabla_usuarios`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
