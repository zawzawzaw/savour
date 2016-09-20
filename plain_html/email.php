<?php 
  $EmailFrom = "no-reply@sg.sagewestperth.com";

  // $EmailTo = "jairus.aragon@gmail.com";
  $EmailTo = "reservations.westperth@sage-hotels.com";
  $Subject = "Contact Us Form";

    
  $salutation = "";
  if( isset($_POST['contact-salutation']) ) {
    $salutation             = Trim(stripslashes($_POST['contact-salutation'])); 
  }
  $form_subject = "";
  if( isset($_POST['contact-subject']) ) {
    $form_subject             = Trim(stripslashes($_POST['contact-subject'])); 
  }
  $fullname = "";
  if( isset($_POST['contact-fullname']) ) {
    $fullname              = Trim(stripslashes($_POST['contact-fullname'])); 
  }
  $number = "";
  if( isset($_POST['contact-number']) ) {
    $number               = Trim(stripslashes($_POST['contact-number'])); 
  }
  $emailaddress = "";
  if( isset($_POST['contact-email-address']) ) {
    $emailaddress           = Trim(stripslashes($_POST['contact-email-address'])); 
  }
  $country = "";
  if( isset($_POST['contact-country']) ) {
    $country            = Trim(stripslashes($_POST['contact-country'])); 
  }
  $message = "";
  if( isset($_POST['contact-message']) ) {
    $message          = Trim(stripslashes($_POST['contact-message'])); 
  }

  
  // prepare email body text
  $Body = "";
  $Body .= "Subject: ";
  $Body .= $form_subject;
  $Body .= "\n";
  $Body .= "Salutation: ";
  $Body .= $salutation;
  $Body .= "\n";
  $Body .= "Full name: ";
  $Body .= $fullname;
  $Body .= "\n";

  $Body .= "Contact Number: ";
  $Body .= $number;
  $Body .= "\n";

  $Body .= "Email: ";
  $Body .= $emailaddress;
  $Body .= "\n";
  $Body .= "Country: ";
  $Body .= $country;
  $Body .= "\n";
  $Body .= "Message: ";
  $Body .= "\n";
  $Body .= $message;
  $Body .= "\n";

  // send email 
  $success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

  // redirect to success page 
  if ($success){
    //print "<meta http-equiv=\"refresh\" content=\"0;URL=" . $referer . "about_us.html\">";
    print "success";
  } else{
    //print "<meta http-equiv=\"refresh\" content=\"0;URL=" . $referer . "about_us.html\">";
    print "error";
  }


?>