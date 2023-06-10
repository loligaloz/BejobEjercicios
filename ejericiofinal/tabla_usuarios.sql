-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-06-2023 a las 16:46:41
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
(4, 'Vanya', 'Atanasova', 'Marinova', 'marinovavanya@hotmail.com', 'VMarinova', 'VMA_587'),
(7, 'Juan', 'Luces', 'Gallego', 'juanlugall@gmail.com', 'JuanGall', '1452'),
(10, 'Lucas', 'Villejo', 'Garcia', 'lucasvillejo@gmail.com', 'LucasVillejo', '1234'),
(12, 'Luccas', 'Gilbaja', 'Valdecrespo', 'lucgilvalde@gmail.com', 'LucasVald', '14785'),
(13, 'Siria', 'Galicia', 'Almenabar', 'siriaalmenabar@gmail.com', 'SiriaGal', '1234'),
(14, 'Lucas', 'Suarez', 'Lopez', 'lucaslopez@gmail.com', 'LucasSuarez', '1234'),
(15, 'Lucas', 'Sanz', 'Almenabar', '2156@ff1cp.com', 'LucasSanz', '13741'),
(16, 'Juan Tomas', 'Garcia', 'Acebes', 'jtomasgarcia@yahoo.es', 'JuanGarcia', '7841623'),
(17, 'Ainoa', 'De', 'La Sierra', 'ainoadelasierra@gmail.cm', 'AinoaSierra', '12345'),
(18, 'Susana', 'Azar', 'Lusandra', 'susanaazar@yahoo.es', 'SuanaAzar', '8965'),
(19, 'Veronica', 'Lopez', 'Gutierrez', 'veronicalogu@yahoo.es', 'VeronicaLopez', '14852'),
(20, 'Lucia', 'Arenales', 'Cañibano', 'luciaarenales@gmail.cm', 'LuciaAr', '147lo'),
(21, 'Heidi', 'Polmov', 'Sotorov', 'hiedisotorov@gmail.com', 'HeidiStorov', 'dfjuik'),
(22, 'Rocio', 'Durcal', 'Arajoz', 'RocioDurcal@yahoo.es', 'RocioD', '147po'),
(23, 'Paula', 'Rabal', 'Garcia', 'teresarabal@yahoo.es', 'TRabal', '1478'),
(24, 'Sonia', 'Garcia', 'Galllego', 'soniagallego@gmail.com', 'SoniaGallego', '14785'),
(25, 'Fran', 'Lopez', 'Sotorov', 'franlopez@gmail.com', 'Franlopez', '147963'),
(26, 'Luciana', 'Merino', 'Gutierrez', 'lucianamergut@yahoo.com', 'LucianaM', 'lucian'),
(27, 'Julio', 'Iglesias', 'Segura', 'julioiglesias@gmail.com', 'Julio_Iglesias', '589*8'),
(28, 'Martin', 'Gomez', 'Del Barrio', 'martingomezdlbarrio@gmail.com', 'MartinBarrio', 'martin14'),
(29, 'Lucas', 'Bravo', 'Arenales', 'juanbravo@gmail.com', 'LucasBravo', 'lucas'),
(30, 'Elena', 'Garcia', 'Merino', 'elenagarcia@gmail.com', 'ElenaG', 'elenagar'),
(31, 'Lucas', 'Juan', 'Lopez', 'juanlopezsantos@yahoo.es', 'Lucasjuan', '1452'),
(32, 'Lucas', 'Juan', 'Lopes', 'JUan@gmail.com', 'LUcasJuan', '1478'),
(33, 'Lucas', 'Juan', 'Santos', 'juansantos@gmail.com', 'JuanSantos', '14782'),
(34, 'Estefania', 'Lopez', 'Sona', 'estefaniasona@gmail.com', 'Estefania', '147852'),
(35, 'Lucas', 'Santos', 'Recen', 'lucassantos@gmai.com', 'Recen', '1478'),
(36, 'Lucas', 'Farnticso', 'Estevab', 'lucasfrantisco@gmail.com', 'Esevab', '79/*'),
(37, 'Elena', 'Santos', 'Garcia', 'elenasantosgarcia@gmail.com', 'ElenaS', '1452'),
(38, 'Ester', 'Garcia', 'Garrido', 'estergarciagarrido@yahoo.es', 'EsterGG', 'ester'),
(39, 'Pauli', 'Garcia', 'Lozano', 'pgaloz@yahoo.es', 'PGaloz', 'palo'),
(40, 'Luis Alejandro', 'Garcia', 'Lozano', 'luisalejgarcialozano@gmail.com', 'Luis_Alejandro', '1452'),
(41, 'Susana', 'Gutierrez', 'Estafania', 'susanaestefania@gmail.com', 'SusanaEst', '7852'),
(42, 'Lucia', 'Suarez', 'Gutierrez', 'luciasuarezgu@hotmail.com', 'Lucia_Suarez_Gu', 'lucia14');

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
