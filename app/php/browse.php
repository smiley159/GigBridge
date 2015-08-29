

<?php 
require_once 'config.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$task = $request->task;

if($task == 'browseBand'){

	$band_name = $request->band_name;
	$band_price = $request->band_price;
	$band_genres = $request->band_genres;
	$statement = "SELECT * FROM Band WHERE ";

	if(count($band_genres)!=0){
		$temp = '';
		foreach ($band_genres as $key => $value) {
			$temp = $temp."'".$value->id."',";

		};
		$temp = substr($temp,0,strlen($temp)-1);
		$temp = "(".$temp.")";
		$statement = $statement."band_id IN (SELECT band_id FROM Genres as g WHERE g.genres IN ".$temp." ) AND ";
	}

	if(isset($band_price)){
		$statement = $statement."band_price <= '".$band_price."' AND";
	}

	$statement = $statement." band_name LIKE '%".$band_name."%' AND band_enable = '1';";
	
	
	$response = $conn->query($statement)->fetchAll();

	echo json_encode($response);
	



};













?>