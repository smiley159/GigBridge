

<?php 
require_once 'config.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$task = $request->task;

if($task == 'browseBand'){

	$band_name = $request->band_name;
	$band_price = $request->band_price;
	if ( isset($band_price) )
		$response=$conn->query(
		"SELECT * 
		FROM 
		Band 
		WHERE 
		band_name LIKE '%".$band_name."%' 
		AND band_price <= '".$band_price."';"
		)->fetchAll();
	else
		$response=$conn->query(
		"SELECT * 
		FROM 
		Band 
		WHERE 
		band_name LIKE '%".$band_name."%';"
		)->fetchAll();  


	echo json_encode($response);

}









?>