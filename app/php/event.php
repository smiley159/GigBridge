

<?php 
require_once 'config.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$task = $request->task;


if($task == 'getEventById'){

	$response = $conn->select("event","*" , [
	"band_id" => $request->band_id,
	]);

	echo json_encode($response);

}else if($task == 'getEventByEventId'){

	$response = $conn->select("event","*" , [
	"event_id" => $request->event_id,
	]);

	echo json_encode($response);

}







?>