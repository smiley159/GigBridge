<?php
require_once 'config.php';

@$task =$_POST['task'];



if($task=='createProduct'){

	@$productName = $_POST['productName'];
	@$price= $_POST['price'];
	@$amount = $_POST['amount'];
	@$description = $_POST['description'];
	@$productCode = $_POST['productCode'];
	@$shopId = $_POST['shopId'];

	$filename = $_FILES['file']['name'];
	$temp = explode(".",$filename);
	$newfilename = $productCode.$productName.$shopId.'.'.end($temp);
	

	$destination = "../images/image/".$shopId."/";

	if ( ! is_dir($destination)) {
		mkdir($destination);
	}

	$imagePath = $destination.$newfilename ; 
	move_uploaded_file( $_FILES['file']['tmp_name'] , $imagePath );
	$imagePath = substr($imagePath, 3);

		$conn->insert("product", [
		"productName" => $productName,
		"description" => $description,
		"shopId" => $shopId,
		"price" => $price,
		"imagePath" => $imagePath,
		"productCode" => $productCode,
		"amount" => $amount,
		]);

	
		echo json_encode(array('productId'=> mysqli_insert_id($conn),'imagePath'=>$imagePath));



	// $result = $conn->query(
	// 	"INSERT INTO product (productName,description,shopId,imagePath,price,productCode,amount)
	// 	VALUES ('$productName','$description','$shopId','$imgPath','$price','$productCode','$amount');"
	// 	);
	

}

// echo json_encode($result);



?>