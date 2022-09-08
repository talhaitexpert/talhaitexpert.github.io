    <?php
    $email = !empty($_POST['email']) ? $_POST['email'] : "";
    $fname = !empty($_POST['fname']) ? $_POST['fname'] : "";
    $msg = !empty($_POST['msg']) ? $_POST['msg'] : "";
    $msg = "Email: <br>" . $email . " fname: " . $fname . "<br> message: " . $msg;
    ;
    if(!mail("talhapitb@gmail.com", "from $email", $msg)) {
        echo "Email sending fail";
      }
      else {
    echo '<div class="alert alert-dismissible alert-success">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>Success!</strong> You message has been delieverd successfully</a>.
    </div>';
      }







