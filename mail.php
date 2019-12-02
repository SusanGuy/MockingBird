<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        # FIX: Replace this email with recipient email
        

        $mail_to = "susansubedi34@gmail.com";

        # Sender Data
        $name = $_POST["name"];
        $message = $_POST["message"];
        $email = $_POST["email"]; 
        $subject= $_POST["subject"];

        if(strpos($email, "go.olemiss.edu") == false){

    header("Location: https://turing.cs.olemiss.edu/~ssubedi1/CSCI_354/Assignment7/contact.html?message=emailError"); 

} else{

  

        # email headers.
        $headers = "From: $name <$email>";

        # Send the email.
        $success = mail($mail_to, $subject, $message, $headers);
        if ($success) {
            # Set a 200 (okay) response code.
            http_response_code(200);
            header("Location: https://turing.cs.olemiss.edu/~ssubedi1/CSCI_354/Assignment7/contact.html?message=Success"); 
            
        } else {
            # Set a 500 (internal server error) response code.
            http_response_code(500);
           header("Location: https://turing.cs.olemiss.edu/~ssubedi1/CSCI_354/Assignment7/contact.html?message=mailError"); 
        }
    

}
 
    } else {
        # Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        // header("Location:https://turing.cs.olemiss.edu/~ssubedi1/CSCI_475/Assignment6/contact.html?message=mailError"); 
        header("Location: https://turing.cs.olemiss.edu/~ssubedi1/CSCI_475/Assignment6/contact.html?message=mainError"); 
    }

?>
