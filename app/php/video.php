

<?php 
require_once 'config.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$task = $request->task;

if($task == 'getVideoById'){

	$response = $conn->select("youtube","*" , [
	"band_id[=]" => $request->band_id
	]);

	echo json_encode($response);

}else if($task == 'addComment'){

	$response = $conn->insert("Comment", [
	"topicId" => $request->topicId,
	"commentImage" => $request->commentImage,
	"username" => $request->username,
	"userId" => $request->userId,
	"commentContent" => $request->commentContent
]);

	$temp = $conn->select("Topic","*" , [
	"topicId[=]" => $request->topicId
	]);

	$conn->update("Topic", 
	["comment" => ($temp[0]['comment']+1)],
	["topicId[=]" => $request->topicId]
	);

	echo json_encode($response);

}
		




?>