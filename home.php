<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home page</title>
    <link rel="stylesheet" href="home.css">
</head>
<body>
<form>
    <h4 class="error_message">Invalid message field must not be null</h4>
    <label>
        <input id="username" type="text" name="title" placeholder="Title">
    </label>
    <label>
        <input id="password" type="text" name="description" placeholder="Description">
    </label>
    <input id="submitBtn" type="submit" name="send" value="Send">
</form>
<div class="response"></div>
<script src="signIn.js"></script>
</body>
</html>