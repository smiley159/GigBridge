

<?php 
require_once 'config.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$task = $request->task;

if($task == 'addUser'){
	$response = $conn->select("Event_Planner","*" , [
	"facebook_id" => $request->facebook_id,
	"line" => $request->user->line,
	"phone_number" => $request->user->pNumber,
	"email" => $request->email,
	"first_name" => $request->user->fName,
	"last_name" => $request->user->lName,

	]);

	echo json_encode($response);

}else if($task == 'searchUserById'){

	$name = $request->band->name;
	$last_name =substr($name,strpos($name,' '));
	$first_name =substr($name,0,strpos($name,' '));
	$response = $conn->select("Event_Planner","*" , [
	"facebook_id" => $request->band->id,
	]);

	if(!$response){
		$conn->insert("Event_Planner",[
		"facebook_id" => $request->band->id,
		"first_name" => $first_name,
		"last_name" => $last_name,
		"profile_picture"=>"http://graph.facebook.com/".$request->band->id."/picture?type=large"
		]);
		$response = $conn->select("Event_Planner","*" , [
		"facebook_id" => $request->band->id,
		]);

	};

	echo json_encode($response);
}






		




?>