-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2023 at 08:49 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_playground`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `author` text NOT NULL,
  `url_photo` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `author`, `url_photo`, `created_at`, `updated_at`) VALUES
(1, 'Judul 1', 'Author 1', 'https://cdn1-production-images-kly.akamaized.net/KZq0pDm6oL5XbJMCwUCfcDjqhKg=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1007116/original/028577700_1443707050-Batik-Mega-Mendung.jpg', '2023-11-21 04:28:56', '2023-11-21 04:28:56'),
(2, 'Judul 2', 'Author 2', 'https://png.pngtree.com/png-clipart/20211024/original/pngtree-indonesian-batik-floral-pattern-png-image_6862519.png', '2023-11-21 04:28:56', '2023-11-21 04:28:56');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`, `updated_at`) VALUES
(1, 'john', 'john123', '2023-11-19 16:12:57', '2023-11-19 16:12:57'),
(2, 'allen', 'allen123', '2023-11-19 17:10:35', '2023-11-19 17:10:35'),
(5, 'alex', '$2b$10$j989qeNDroPTLBvMoenPyeY89JBEEKyiQ7vh8qqih4g2N7eLmBUIq', '2023-11-20 14:55:12', '2023-11-20 14:55:12'),
(6, 'alex123', '$2b$10$bUmoJ3La8QOTYqLDzfpD0.X5e/ztTohwW8mmVQ7W8pSdTe8jS5IEK', '2023-11-20 14:58:48', '2023-11-20 14:58:48'),
(10, 'john12345', '$2b$10$iSSSdGBF43GvkHzG8RPJ4.ray2R4bJs5jrPTGwLGqwwF/X27HB.dC', '2023-11-21 03:59:13', '2023-11-21 03:59:13'),
(11, 'mael123', '$2b$10$xdaUrcokTP5gpJ.WAjWeT.KjRCIbb.TYG0gA8RnlW1PeE9Y7ZgYWy', '2023-11-21 04:00:04', '2023-11-21 04:00:04'),
(12, 'mael12345', '$2b$10$TghFB5pD3X.SuijrtxchBOWvP8Kno1GVgfxECg2nkxH5Joy115IJO', '2023-11-21 04:03:48', '2023-11-21 04:03:48'),
(13, 'lehim', '$2b$10$R2NanI7YSqk9LFQvxCc93Oy1bLjUV13pQec.ohZz0YHCsEegaXzIK', '2023-11-21 04:06:59', '2023-11-21 04:06:59'),
(14, 'lehim1', '$2b$10$5Sj8bRbI9XyaWJabmbq4C.zZUeRAjcPm2QaQvGwXnRQ8fI3RjWhRq', '2023-11-21 04:07:17', '2023-11-21 04:07:17'),
(15, 'lehim111', '$2b$10$gpAvDK58UQyyn66jnMcY6.M0bTOjvHaU0Bg/S3JxdEbErbsep/mpm', '2023-11-21 04:08:50', '2023-11-21 04:08:50'),
(16, 'lehim1dsf11', '$2b$10$eZD/gS8DrxDSPiORDPtAK.EcoHOW66NXsLK6kpERekNbT4xexEnsW', '2023-11-21 04:09:03', '2023-11-21 04:09:03'),
(17, 'lehim1dfsafsf11', '$2b$10$vZ/uR4SZjPwwEL43/cn.eu20YES4L5Y9dnIVXiyZsjxhu1IevtmjC', '2023-11-21 04:09:59', '2023-11-21 04:09:59'),
(18, 'lehim1dsffsafsf11', '$2b$10$8xAjkLLVQgJk1dTfK.OHmuXpHhjOxW/.m80w6CYukhxlfRpK7QuWm', '2023-11-21 04:10:19', '2023-11-21 04:10:19'),
(19, 'john12345dfdf', '$2b$10$VTmBA9lPM1WsikYwSEtBeO2NIJeX2JAhIz71HmJ5e6AzEyF3cxLTe', '2023-11-21 06:32:52', '2023-11-21 06:32:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
