-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 28-05-2020 a las 14:08:45
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
  `fecha_creacion` date DEFAULT NULL,
  `fecha_actualizacion` date DEFAULT NULL,
  `puntaje_serie` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `resenas`
--

INSERT INTO `resenas` (`id_resena`, `id_serie`, `id_usuario`, `texto_resena`, `fecha_creacion`, `fecha_actualizacion`, `puntaje_serie`) VALUES
(1, NULL, NULL, 'asdfdr', NULL, NULL, '4');

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
  `fecha_nacimiento` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nombre_usuario`, `apellido_usuario`, `email`, `id_usuario`, `contraseña`, `fecha_nacimiento`) VALUES
('Bernard', 'Lowe', 'blowe@movfly.com', 8, '$2a$10$bVtOEt4HUrdsqWPXHvmPJeVOG1BatBq0zvrXDWT3ZwDPkD7Myi9cK', '1980-07-18'),
('Ricardo', 'Darin', 'rdarin@movfly.com', 9, '$2a$10$jw0tDxdl0TwsXNPqp3z0mOkaEMepnE.CNcp7i1hHem.V1rJsROLnK', '1957-01-16'),
('Fabrisio', 'Silvestrini', 'fsilvestrini@movfly.com', 19, '$2a$10$Bh5jlMi/h01dUYZOTkOeyuiolpzllIhX8KLC54TdXc6EPvKHfWmEe', '1999-07-23'),
('Katy', 'Keene', 'kkeene@movfly.com', 22, '$2a$10$ai42Jzabk.ORp8nl0TqKDuSgkntmrHow7moGfGp9I55xwXH7DswVK', '1996-03-06'),
('Tomas', 'Gomez', 'tgomez@movfly.com', 24, '$2a$10$QKbbR/u26qvWV3HKvgF6eu1g69XaMHX0oFDgMOGB4KSbZgnTW1.Sq', '0199-05-06');

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
  MODIFY `id_resena` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
