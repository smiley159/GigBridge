
<?php 

require_once 'medoo.php';

$conn = new medoo([
	// required
	'database_type' => 'mysql',
	'database_name' => 'smiley15_StartupJourney',
	'server' => ‘localhost’,
	'username' => ‘smiley15_db’,
	'password' => ‘zhongguo’,
	'charset' => 'utf8',
 
	// optional
	
	// driver_option for connection, read more from http://www.php.net/manual/en/pdo.setattribute.php
	'option' => [
		PDO::ATTR_CASE => PDO::CASE_NATURAL
	]
]);
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// $conn = new mysqli("localhost", "root", "root", "konkaikong");
?>