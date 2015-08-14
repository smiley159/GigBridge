

<?php 
require_once 'config.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$task = $request->task;

if($task == 'getAllBand'){

	$response = $conn->select("Band","*");
	echo json_encode($response);

}




		




?>