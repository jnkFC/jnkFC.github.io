-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 30, 2015 at 11:34 AM
-- Server version: 5.6.25
-- PHP Version: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `subscriber`
--

-- --------------------------------------------------------

--
-- Table structure for table `detail`
--

CREATE TABLE IF NOT EXISTS `detail` (
  `name` varchar(30) DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `phn_no` bigint(10) DEFAULT NULL,
  `country` varchar(20) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail`
--

INSERT INTO `detail` (`name`, `email`, `gender`, `phn_no`, `country`, `state`) VALUES
('', '', '', 0, '', ''),
('asd', 'ajhgjjsd@gmail.co.ia', 'male', 1234567895, '', 'San Francisco'),
('asd', 'ajhgjjsd@gmail.co.ij', 'male', 1234567890, '', 'San Francisco'),
('asd', 'ajhgjjsd@gmail.co.in', 'male', 1234567895, '', 'San Francisco'),
('asd', 'ajhgjjsd@gmail.co.is', 'male', 1234567895, '', 'San Francisco'),
('a', 'asd@gmail.co.ib', 'male', 1234567895, '', 'San Francisco'),
('sadsd', 'asd@gmail.co.il', 'male', 1234567890, '', 'New York');

-- --------------------------------------------------------

--
-- Table structure for table `football`
--

CREATE TABLE IF NOT EXISTS `football` (
  `email` varchar(30) NOT NULL,
  `brazil` varchar(20) DEFAULT 'NOT_INTERESTED',
  `argentina` varchar(20) DEFAULT 'NOT_INTERESTED',
  `germany` varchar(20) DEFAULT 'NOT_INTERESTED'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `interest`
--

CREATE TABLE IF NOT EXISTS `interest` (
  `email` varchar(30) NOT NULL,
  `football` varchar(20) DEFAULT NULL,
  `movie` varchar(20) DEFAULT NULL,
  `reading` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `interest`
--

INSERT INTO `interest` (`email`, `football`, `movie`, `reading`) VALUES
('asd@gmail.co.ib', 'Football', 'Movie', 'Reading');

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE IF NOT EXISTS `movie` (
  `email` varchar(30) NOT NULL,
  `romantic` varchar(20) DEFAULT 'NOT_INTERESTED',
  `horror` varchar(20) DEFAULT 'NOT_INTERESTED',
  `action` varchar(20) DEFAULT 'NOT_INTERESTED'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reading`
--

CREATE TABLE IF NOT EXISTS `reading` (
  `email` varchar(30) NOT NULL,
  `blog` varchar(20) DEFAULT 'NOT_INTERESTED',
  `novel` varchar(20) DEFAULT 'NOT_INTERESTED',
  `short_stories` varchar(20) DEFAULT 'NOT_INTERESTED'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `detail`
--
ALTER TABLE `detail`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `football`
--
ALTER TABLE `football`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `interest`
--
ALTER TABLE `interest`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `reading`
--
ALTER TABLE `reading`
  ADD PRIMARY KEY (`email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
