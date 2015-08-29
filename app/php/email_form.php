<?php
// the message
require_once 'config.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);


// use wordwrap() if lines are longer than 70 characters
$msg;
if($request->task == 'signUp'){
$msg = "<html><body style='margin: 0px; padding: 0px;'>
  <table border='0' cellpadding='0' cellspacing='0' width='100%'> 
    <tbody><tr>
      <td style='padding: 10px 0 30px 0;'>
        <table align='center' border='0' cellpadding='0' cellspacing='0' width='600' style='border: 1px solid #cccccc; border-collapse: collapse;'>
          <tbody><tr>
            <td align='center' bgcolor='#33383b' style='padding: 40px 0 50px 0; color: #ffffff; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;'>
              <p>LENSOD.com</p>
              <a href='http://lensod.com/' style='color: #ffffff;'><img src='http://lensod.com/assets/img/Black_L.jpg' alt='Creating Email Magic' width='300' height='300' style='display: block;'></a>
              <p>Coolest way to book live music.</p>
            </td>
          </tr>
          <tr>
            <td bgcolor='#ffffff' style='padding: 40px 30px 40px 30px;'>
              <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                <tbody><tr>
                  <td style='color: #153643; font-family: Arial, sans-serif; font-size: 24px;'>
                    <b>Thank you for signing up with us!</b>
                  </td>
                </tr>
                <tr>
                  <td style='padding: 20px 0 50px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;'>
                    We've got every thing set for you, just chilling out 
                    and wait for us to check a little bit of details and confirm your profile.

                    <p>We will contact to you for the next step ASAP!</p><br></br>
                    <div style='text-align:center ;'><img src='data:image/png;base64,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'/></div>
                    <div style='text-align:center ;'><p>Stay Awesome!</p></div>

                  </td>

                </tr>
              
              </tbody></table>
            </td>
          </tr>
          <tr>
            <td bgcolor='#33383b' style='padding: 30px 30px 30px 30px;'>
              <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                <tbody><tr>
                  <td style='color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;' width='75%'>
                    ® LENSOD, 2015<br>
                  </td>
                  <td align='right' width='25%'>
                    <table border='0' cellpadding='0' cellspacing='0'>
                      <tbody><tr>
                        <td style='font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;'>
                          <a href='https://www.facebook.com/lensodth' style='color: #ffffff;'>
                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAHb0lEQVR4Xu1b23EUOxBVzzKuolhpuBFgR4AdASaCiyPAjsAQASYCTATYEVw7gmtHgIkAOwI8WldRBdQ0dbY0W7MaveZl88H8rlZqnW7146hFYuKPmZ8uFosXRLTNzNtCiKfMvElEm82lmfmaiK6FELdEdMXMV1LKSyK6nVJEmmLyu7s7bPZ1VVW72PiQNQBElmUXRHQ6n8+vhszl+u9oAEDTWuvXQog3tnbHEhpWIoQ4VkqdjmUZgwHAxu/u7g6rqsLGn4612dA8zHybZdnxfD7/OBSIQQBA48x8fF8bt0EBEET0BhbRF/heAHz//n3z58+fn4QQu4kLfyGii6qqrrMsu3r06NH148ePYc6rD3P++vVrs6qq7SzLNpkZcz9PnP8iz/MDe86U/3YGQGv9ipk/JWj9UghxIqU862umJoK8EkLsCyFexI4FER0opc5SNl6P6QTAYrH4wMxvIguc5nl+1EcboXmN1R0JIeBovR8RHUsp36aCkAyA1homD034vkk2bi+WCMSJUuogBYQkALTW/wkhYIqtj5lvsizbl1JepCw41pjFYrFbVdUJET3zzHmmlNqLrRcFIKL5cynlft8zHhMu9rvxESdCiH89Y6OWEARgsVgcM/OhZ3I4HCz+4F9ZlshBPrgEIaKPUkqv3/ICAG8vhIDpu74/ZvO1cFpr+Cf4Kde354sOTgDgaH78+PHZE+r+uM3HQEDCtLGxseOKTE4AtNb/u5IcZn5bFMXxg9t8QIDAcbhQSr20/9oCIGBK50opZyT40wDRWiMZcjnGlvWuAWAquq+26SPUKaW2H8rbdwXY7OPKDpE4CkqpreY+1gAoy/KIiN61zITo5X3H+a6btscjT2BmHOW1j5nfF0WBjHL5rQDwaV8IcaqUCmWAQ2Vd/d/wCThmy6NWkyHz+fy9bX2QN2aRWmuE6bXU2baCFQA+55Hn+VYsrwcD9OTJE1Bavegrk9Ag5DqrSwg9m81eghEyVeMhM2/FfJJJm786rGDlzJsA4Oyv8XSp2jdOp3B52RTzKMsSITdKnRnecCljlmU7KRSZxwqui6LYWh0BaLCqqs+2sCnax3+01mz+G0097TV8ficC3AHKbMgd800+K6gBXFqAJ+W9VEolER4NADDdhZRyL/U4lGX5LYFbWOEBv2DmBuGa5Jy11ijU1viEOkVeAuAxweSMzwIAzguc3V5MOz7LSzk2Qogu8rXSZABZFMUOGQf0zV5USvlPBy3CAbrK0iBVFak3Qjgkb95EE9xNuPfoEeILEp9ETcAHtMKN9V+YIOix8yaooSousHby0WzOobXGnYLNMe6RywnFSkhbOJ+j8WwClxwQ5raqKrC6XWuLXgC4/BySInLlzX2Knp7aTDWy5rheAHjkOwcALg+Z5F1rqUz1iGOwyuL67CzxP72KMk9qfIkj0EqAUuN/A4A6D0jcQ/9hdi6fOpPrmC5Dqh3CMKFSKsoVWg7GV36mytdlXKcIYMnZUtQoAPgqry67Sh3b1TrvBQAskhAKU/foHQdeoigKu15Jntdl7aNYQC1BhEVOFtQ3sO/5D/kqOMFWFjfEzMxxQOoZvMLqg8YQuTxO8GaUMNhAGKEQKXFSEdURhEHEjDcMjpUIYTNTOsMh2odsnkTodJRUuKnJKfzA0LNvlNO65apT4dYNUF0qdjTR1fCRQehUmPlk9pT8e6OUw65FTa2POzmErWBzQ8DrlxsbG9sxTjKmqGDJb2K4q1TsnXFZR+IdM69o6Jiw9e/MXM5ms90U3i82p+eyZ2lZIUrMeZUUW6z+3VgAbmw7R4QxN28U3LrqW6PEhpCiNT9v2uWeowsUbTQpLK8HzEsp5atUNiqmkCRS1IQJF60Vjb1mAcT/Xue8afJCiKOxL189tPgqpR7lYqSRA+wzM7RXxDTT2PiN6f5Eu0uvixXfWp0uRszVGKzAFj5qBU0BjMcFZY27uWVzdJOLQ0GDpmhmvpjNZmdjODkfAK7eJvgXpRSatZdg/70ctbWntW5ZAa6klFI7Y5to6jHpOs5YM67b7Jb8Ne23LMCEDF+vTVLbWVdhpxgfaOsLN0jUwriIUvzWhy2eYoOhOQPstJNNDjVJ4Q7O5c1HyRCnAMbX3gPH50up/7bJhTQRquqQ7RVF8XEKTXadsyzLQ98NU+yWK0p/R8jOMynlwUNFB5NzoDnS170WzWGiAJjI4OX9ESKzLEPDwkM0S+Pdgo8ljm7eGQYDWVXsBvgkz/P3Q2v3mPmb9BadbMHW/dTGriQLqIVKZHomASJx4yJ25m2AOwFgjgOezKBwiRU8zp6AmIYddQU6PqHtIK+AUEdE+5M+mamF61oC1/1+jUdTN55HU8/qR1MdH11e5nm+3+f4dbaApoaQeJhnczFr6KL45LFG63g21/vdwiAATHqMF6MgP8EC3QsQ2LjhEPBmcRCHMBiAWl2mAsNZBRC+dzzJ2nUNBJcwNnkyGgBNgc3jaRyPLo8ffeAsH10S0ckU5MkkADg8+ZIdMkRp/Xx+zUpqpgjNU6YZEs/nsfFBJh4zud+QiBNpXl+UaAAAAABJRU5ErkJggg==' alt='Twitter' width='38' height='38' style='display: block;' border='0'>
                          </a>
                        </td>
                        <td style='font-size: 0; line-height: 0;' width='20'>&nbsp;</td>
                        <td style='font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;'>
                          <a href='https://twitter.com/lensodth' style='color: #ffffff;'>
                            <img src='data:image/png;base64,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' alt='Facebook' width='38' height='38' style='display: block;' border='0'>

                          </a>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>
        </tbody></table>
      </td>
    </tr>
  </tbody></table>




</body></html>";
}else{
	$msg = "<html>
<body style='margin: 0px; padding: 0px;'>
	<table border='0' cellpadding='0' cellspacing='0' width='100%'>	
		<tbody><tr>
			<td style='padding: 10px 0 30px 0;'>
				<table align='center' border='0' cellpadding='0' cellspacing='0' width='600' style='border: 1px solid #cccccc; border-collapse: collapse;'>
					<tbody><tr>
						<td align='center' bgcolor='#33383b' style='padding: 40px 0 50px 0; color: #ffffff; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;'>
							<p>LENSOD.com</p>
							<a href='http://lensod.com/' style='color: #ffffff;'><img src='http://lensod.com/assets/img/Black_L.jpg' alt='Creating Email Magic' width='300' height='300' style='display: block;'></a>
							<p>Coolest way to book live music.</p>
						</td>
					</tr>
					<tr>
						<td bgcolor='#ffffff' style='padding: 40px 30px 40px 30px;'>
							<table border='0' cellpadding='0' cellspacing='0' width='100%'>
								<tbody><tr>
									<td style='color: #153643; font-family: Arial, sans-serif; font-size: 24px;'>
										<b>Thank you for booking with us!</b>
									</td>
								</tr>
								<tr>
									<td style='padding: 20px 0 50px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;'>
										Thank you for rock out with us. We are contacting the Artist and will be intouch shortly with final details on your requested

										<p>Here is your booking summary links!</p>
										<p>PUT LINKS IN HERE</p><br></br>
										<div style='text-align:center ;'><img src='data:image/png;base64,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'/></div>
										<div style='text-align:center ;'><p>Stay Awesome!</p></div>

									</td>

								</tr>
							
							</tbody></table>
						</td>
					</tr>
					<tr>
						<td bgcolor='#33383b' style='padding: 30px 30px 30px 30px;'>
							<table border='0' cellpadding='0' cellspacing='0' width='100%'>
								<tbody><tr>
									<td style='color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;' width='75%'>
										® LENSOD, 2015<br>
									</td>
									<td align='right' width='25%'>
										<table border='0' cellpadding='0' cellspacing='0'>
											<tbody><tr>
												<td style='font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;'>
													<a href='https://www.facebook.com/lensodth' style='color: #ffffff;'>
														<img src='data:image/png;base64,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' alt='Twitter' width='38' height='38' style='display: block;' border='0'>
													</a>
												</td>
												<td style='font-size: 0; line-height: 0;' width='20'>&nbsp;</td>
												<td style='font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;'>
													<a href='https://twitter.com/lensodth' style='color: #ffffff;'>
														<img src='data:image/png;base64,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' alt='Facebook' width='38' height='38' style='display: block;' border='0'>

													</a>
												</td>
											</tr>
										</tbody></table>
									</td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>
	</tbody></table>




</body>
</html>";
};

// send email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	$email = $request->email;
	$result = mail("$email","My subject",$msg,$headers);
			mail("team@lensod.com","Booking","Someone have book you",$headers);
	echo json_encode($result);
	
	



?>