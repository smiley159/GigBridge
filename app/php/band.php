

<?php 
require_once 'config.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$task = $request->task;

if($task == 'getAllBand'){

	$response = $conn->select("Band","*",[
		'band_enable' => 1]);


} else if($task == 'getBandById'){

	$response = $conn->select("Band","*",[
		'band_id' => $request->band_id,
	]);


} else if($task == 'getBandByGenre'){

	$band_genres = $request->band_genres;
	$temp = '';

	foreach ($band_genres as $key => $value) {
		$temp = $temp."'".$value."',";

	};
	$temp = substr($temp,0,strlen($temp)-1);
	$temp = "(".$temp.")";

	$response=$conn->query(
			"SELECT * 
			FROM 
			Band 
			WHERE band_id IN (
				SELECT band_id 
				FROM Genres as g
				WHERE g.genres IN ".$temp
				." ) AND band_enable = '1';"
		

	)->fetchAll();

}

$temp = array();
	foreach ($response as $value) {
		$genres = $conn->select("Genres","genres",[
			"band_id" => $value['band_id'],
		]);

		$value['band_genres'] =$genres;
		array_push($temp, $value);
		
	}

$response = $temp;

echo json_encode($response);


		




?>