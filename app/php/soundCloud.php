

<?php 
require_once 'config.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$task = $request->task;

if($task == 'getSoundById'){

	$response = $conn->select("Sound_Cloud","*" , [
	"band_id[=]" => $request->band_id
	]);

	echo json_encode($response);

}else if($task=="getAllTopic"){

	$response=$conn->select("Topic", "*");
	echo json_encode($response);
		
}else if($task=="searchTopic"){

	$keyword = $request->keyword;

	$response=$conn->query(
		"SELECT * 
		 FROM 
    	Topic 
		WHERE 
    	topicHeader LIKE '%".$keyword."%' 
		OR topicContent LIKE '%".$keyword."%';"
	)->fetchAll();

	echo json_encode($response);
		
};
		




?>