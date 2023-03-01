-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema casino_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema casino_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `casino_db` DEFAULT CHARACTER SET utf8 ;
USE `casino_db` ;

-- -----------------------------------------------------
-- Table `casino_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `casino_db`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `surname` VARCHAR(20) NOT NULL,
  `username` VARCHAR(20) NOT NULL,
  `email` VARCHAR(30) NOT NULL,
  `password` MEDIUMTEXT NOT NULL,
  `birth` DATE NOT NULL,
  `money` INT UNSIGNED NOT NULL,
  `image` BLOB NOT NULL,
  `role` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
