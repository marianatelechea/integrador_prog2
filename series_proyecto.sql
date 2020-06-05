-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 05-06-2020 a las 04:42:41
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `series_proyecto`
--
CREATE DATABASE IF NOT EXISTS `series_proyecto` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `series_proyecto`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenas`
--

CREATE TABLE `resenas` (
  `id_resena` int(11) NOT NULL,
  `id_serie` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `texto_resena` varchar(100) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `puntaje_serie` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `resenas`
--

INSERT INTO `resenas` (`id_resena`, `id_serie`, `id_usuario`, `texto_resena`, `fecha_creacion`, `fecha_actualizacion`, `puntaje_serie`) VALUES
(36, 1395, 40, 'La mejor serie lejos. Recomendada 100%', '2020-06-05 04:00:45', '2020-06-05 04:00:45', '10'),
(37, 1395, 42, 'Muy buena!!', '2020-06-05 04:06:39', '2020-06-05 04:06:39', '10'),
(38, 1395, 41, 'Me gustó, pero prefiero mirar otra.', '2020-06-05 04:09:01', '2020-06-05 04:09:01', '8'),
(40, 1395, 45, 'Buena actuación por parte de los personajes.', '2020-06-05 04:11:56', '2020-06-05 04:11:56', '7'),
(41, 1395, 40, 'Enamorada de Chuck Bass!!', '2020-06-05 04:12:35', '2020-06-05 04:12:35', '10'),
(42, 1399, 42, 'LA MEJOR SERIE DE MI VIDA!', '2020-06-05 04:21:24', '2020-06-05 04:21:24', '10'),
(43, 1399, 40, 'No la vi, pero me la super recomendaron!!', '2020-06-05 04:21:56', '2020-06-05 04:21:56', '8'),
(44, 1399, 41, 'No me gusto tanto', '2020-06-05 04:22:22', '2020-06-05 04:22:22', '4'),
(45, 1399, 45, 'Cuando la vea la punteo.', '2020-06-05 04:23:03', '2020-06-05 04:23:03', '0'),
(46, 63247, 40, 'Muy recomendado para toda persona amante de IA', '2020-06-05 04:24:02', '2020-06-05 04:24:02', '10'),
(47, 63247, 42, 'Tiene buenas criticas', '2020-06-05 04:24:22', '2020-06-05 04:24:22', '9'),
(48, 63247, 41, 'Esta buena..', '2020-06-05 04:25:06', '2020-06-05 04:25:06', '6'),
(49, 63247, 45, 'Muy mala!', '2020-06-05 04:25:37', '2020-06-05 04:25:37', '3'),
(50, 63247, 45, 'Esta buena la propuesta!', '2020-06-05 04:26:03', '2020-06-05 04:26:03', '4'),
(51, 1399, 40, 'No me convence', '2020-06-05 04:26:54', '2020-06-05 04:26:54', '2'),
(52, 62560, 40, 'ME ENCANTA. No la termine, pero ya me re enganche.', '2020-06-05 04:27:39', '2020-06-05 04:27:39', '10'),
(53, 62560, 42, 'Buena', '2020-06-05 04:27:51', '2020-06-05 04:27:51', '7'),
(54, 62560, 41, 'No me gusto', '2020-06-05 04:28:02', '2020-06-05 04:28:02', '1'),
(55, 62560, 45, 'Muy bien planteada toda la escenografía', '2020-06-05 04:28:31', '2020-06-05 04:39:58', '8'),
(56, 62560, 41, 'Un poco buena esta.', '2020-06-05 04:28:49', '2020-06-05 04:28:49', '3'),
(57, 87108, 40, 'Refleja mucho lo que esta pasando ahora. Buena serie y no tiene tantos caps.', '2020-06-05 04:30:07', '2020-06-05 04:30:07', '8'),
(58, 87108, 42, 'Buena.', '2020-06-05 04:30:18', '2020-06-05 04:30:18', '6'),
(59, 87108, 45, 'No me gusto, pero tiene muy buenos actores', '2020-06-05 04:31:02', '2020-06-05 04:31:02', '3'),
(60, 87108, 41, 'Amo!!!! Muy buena serie', '2020-06-05 04:31:22', '2020-06-05 04:31:22', '10'),
(61, 87108, 40, 'Buena!!', '2020-06-05 04:31:41', '2020-06-05 04:31:41', '6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `nombre_usuario` varchar(100) DEFAULT NULL,
  `apellido_usuario` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `contraseña` varchar(100) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `generos_fav` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nombre_usuario`, `apellido_usuario`, `email`, `id_usuario`, `contraseña`, `fecha_nacimiento`, `generos_fav`) VALUES
('Mariana', 'Telechea', 'mtelechea@movfly.com', 40, '$2a$10$fBv9gDDJDC5isX6Xgimj4OuYp6x2QAJgm2sy73.0A5bEMUXck5dx.', '1999-05-04', 'Comedy'),
('Milagros', 'Scipioni', 'mscipioni@movfly.com', 41, '$2a$10$0I0WgtJ0Isq2mcLBGnJ/dOozHyg26NNIN3L14fzPklzFszk4qU/NW', '1999-09-15', 'Family'),
('Agostina', 'Rivas', 'arivas@movfly.com', 42, '$2a$10$dMx.uXIHlfW7G5OtiQQlgOsqk2MhMDsHf3RtX1AaLE/EpEcY0rb2y', '1998-11-18', 'Sci-Fi & Fantasy'),
('Quentin', 'Tarantino', 'qtarantino@movfly.com', 44, '$2a$10$xjxkikVe0zSpmkH90pTls.9NK5aLE9LX2Ps/L9qiMeKYa1jwecgxu', '1963-03-27', 'Action & Adventure'),
('Ricardo', 'Darin', 'rdarin@movfly.com', 45, '$2a$10$4IObHfvxKySjv0wIc.tl1eV2nm9F4R1cKnTKWXVT/2lU2Cs7f0dRS', '1957-01-16', 'Crime');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `resenas`
--
ALTER TABLE `resenas`
  ADD PRIMARY KEY (`id_resena`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `resenas`
--
ALTER TABLE `resenas`
  MODIFY `id_resena` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
