-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 18, 2021 lúc 04:00 PM
-- Phiên bản máy phục vụ: 10.4.18-MariaDB
-- Phiên bản PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `billgate`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `qllearned`
--

CREATE TABLE `qllearned` (
  `id` int(11) NOT NULL,
  `ten` varchar(50) NOT NULL,
  `namsinh` varchar(15) NOT NULL,
  `ketqua` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `qllearned`
--

INSERT INTO `qllearned` (`id`, `ten`, `namsinh`, `ketqua`) VALUES
(1, 'Hoàng Hải Long', '14-09-2000', 'Đạt'),
(2, 'Nguyễn Thị Minh', '19-09-2001', 'Không đạt');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `qllearning`
--

CREATE TABLE `qllearning` (
  `id` int(11) NOT NULL,
  `ten` varchar(50) NOT NULL,
  `namsinh` varchar(15) NOT NULL,
  `diemhs1` float NOT NULL,
  `diemhs2` float NOT NULL,
  `diemtb` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `qllearning`
--

INSERT INTO `qllearning` (`id`, `ten`, `namsinh`, `diemhs1`, `diemhs2`, `diemtb`) VALUES
(1, 'An Dương Dương', '12-09-2002', 5, 5, 5),
(2, 'Long Dương Dương', '01-02-2000', 6, 5, 5.33);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `qlprepare`
--

CREATE TABLE `qlprepare` (
  `id` int(11) NOT NULL,
  `ten` varchar(50) NOT NULL,
  `namsinh` varchar(15) NOT NULL,
  `hocphi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `qlprepare`
--

INSERT INTO `qlprepare` (`id`, `ten`, `namsinh`, `hocphi`) VALUES
(1, 'Dương Văn Long', '06-04-2000', 3000000),
(2, 'Nguyễn Bình Minh', '10-09-2000', 1000000),
(3, 'Bùi Đức Minh', '11-11-2000', 1000),
(4, 'Nguyễn Thăng Long', '09-12-2000', 2000000),
(5, 'An Dương Vương', '12-12-1999', 1000000),
(6, 'Bùi Thị Minh', '23-02-2004', 1500000);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `qllearned`
--
ALTER TABLE `qllearned`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `qllearning`
--
ALTER TABLE `qllearning`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `qlprepare`
--
ALTER TABLE `qlprepare`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `qllearned`
--
ALTER TABLE `qllearned`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `qllearning`
--
ALTER TABLE `qllearning`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT cho bảng `qlprepare`
--
ALTER TABLE `qlprepare`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
