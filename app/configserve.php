
<?php 

require_once 'medoo.php';

$conn = new medoo([
	// required
	'database_type' => 'mysql',
	'database_name' => GigBridge,
	'server' => localhost,
	'username' => smiley15_db,
	'password' => Zhongguo1,
	'charset' => 'utf8',
 
	// optional
	
	// driver_option for connection, read more from http://www.php.net/manual/en/pdo.setattribute.php
	'option' => [
		PDO::ATTR_CASE => PDO::CASE_NATURAL
	]
]);


// $conn = new mysqli("localhost", "root", "root", "konkaikong");
?>