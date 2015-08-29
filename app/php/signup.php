<?php
require_once 'config.php';

$task =$_POST['task'];

if($task=='signUpArtist'){

	
	$artist =  json_decode($_POST['artist']);
	
	

	$filename = $_FILES['file']['name'];
	$temp = explode(".",$filename);
	$newfilename = $artist->name.$artist->facebook.'.'.end($temp);
	

	$destination = "../images/band_profile_picture/";

	if ( ! is_dir($destination)) {
		mkdir($destination);
	}

	$imagePath = $destination.$newfilename ; 
	move_uploaded_file( $_FILES['file']['tmp_name'] , $imagePath );
	

	$response = $conn->insert("Band", [
		"band_name" => $artist->name,
		"band_description" => $artist->description,
		"band_price" => $artist->price,
		"band_line" => $artist->line,
		"band_show_length" => $artist->show_length,
		"band_facebook" => $artist->facebook,
		"band_number" => $artist->number,
		"band_location" => $artist->location,
		"band_profile_picture" => $imagePath,
		"band_negotiate" => $artist->negotiate,
		"band_acoustic" => $artist->acoustic,
		"band_travel" => $artist->travel,
		"band_email" => $artist->email,
		"band_member" => $artist->member,
		]);

	$bandId = $response;
	$youtube = $artist->youtube;

	foreach ($youtube as $yt){
		$conn->insert("youtube", [
		"band_id"=>$bandId,
		"youtube_id"=>$yt,
		]);
	};

	$genres = $artist->genres;

	foreach ($genres as $gr){
		$conn->insert("Genres", [
		"band_id"=>$bandId,
		"genres"=>$gr->id,
		]);
	};

	$conn->insert("Sound_Cloud", [
		"band_id"=>$bandId,
		"sound_embed"=>$artist->sound,
		]);





	echo $response;

	

	
	

}





?>