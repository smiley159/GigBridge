

<?php 
require_once 'config.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$task = $request->task;

if($task == 'bookArtist'){

	$booker = $request->booker;
	$event =  $request->event;
	$offer =  $request->offer;
	$date = substr($event->date,0,11);

	$response = $conn->insert('booking_request', [
	'booker_id' => $booker->id,
	'booker_first_name' => $booker->first_name,
	'booker_last_name' => $booker->last_name,
	'booker_email' => $booker->email,
	'booker_number' => $booker->number,
	'booker_line' => $booker->line,
	'event_title' => $event->title,
	'event_date' => $event->date,
	'event_time' => $event->time,
	'event_kind' => $event->kind,
	'event_location' => $event->location,
	'event_equipment' => $event->equipment,
	'event_description' => $event->description,
	'offer_band_id' => $offer->id,
	'offer_show_time' => $offer->show_time,
	'offer_price' => $offer->price,
	'offer_alcohol' => $offer->alcohol,
	'offer_food' => $offer->food,
	'offer_transportation' => $offer->transportation,
	'offer_hotel' => $offer->hotel,
	'offer_other' => $offer->other,

	]);

	echo json_encode($response);

	

}else if($task == 'getRequestByBookerId'){

	$response = $conn->select("booking_request","*" , [
	"booker_id" => $request->id,
	]);

	echo json_encode($response);

}else if($task == 'getRequestByRequestId'){

	$response = $conn->select("booking_request","*" , [
	"request_id" => $request->id,
	]);

	echo json_encode($response);

}




		




?>