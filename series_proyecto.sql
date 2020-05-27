-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 24-05-2020 a las 18:46:13
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
-- Estructura de tabla para la tabla `reseñas`
--

CREATE TABLE `reseñas` (
  `id_reseña` int(11) NOT NULL,
  `id_serie` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `texto_reseña` varchar(100) NOT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `fecha_actualizacion` date DEFAULT NULL,
  `puntaje_serie` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `nombre_usuario` varchar(100) DEFAULT NULL,
  `apellido_usuario` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `id_usuario` int(11) NOT NULL,
  `contraseña` varchar(100) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nombre_usuario`, `apellido_usuario`, `email`, `id_usuario`, `contraseña`, `fecha_nacimiento`) VALUES
('Francisco', 'Ramirez', 'framirez@movfly.com', 1, 'framirez', '1998-03-02'),
('Sofia', 'Perez', 'sperez@movfly.com', 2, 'sperez', '2000-03-03'),
('Juan', 'Gonzalez', 'jgonzalez@movfly.com', 3, 'jgonzalez', '1999-06-12'),
('Juliana', 'Gomez', 'jgomez@movfly.com', 4, 'jgomez', '1998-10-09'),
('Chuck', 'Bass', 'cbass@movfly.com', 5, 'cbass', '1991-01-19');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reseñas`
--
ALTER TABLE `reseñas`
  ADD PRIMARY KEY (`id_reseña`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`);

