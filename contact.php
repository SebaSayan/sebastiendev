<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Formulaire</title>
    <link rel="icon" type="image/x-icon" href="assets/img/dev.png" />
    <link rel="stylesheet" href="./assets/style/index.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
    <style>
        body {
            background: rgb(223, 227, 230);
        }
    </style>
</head>

<body>
    <header>
        <div class="container mx-auto p-3">
            <div class="row">
                <div class="col-12 col-lg-6 leftHeader">
                    <div class="element"> <?php $fromMail = "sebastien06nice@gmail.com";
                                            $myMail = "sebastien-1985@live.fr";
                                            if (isset($_POST['envoyer'])) {
                                                if (empty($_POST['email'])) {
                                                    echo '<h2>Le champ "Email" est vide</h2>';
                                                } else {
                                                    if (!preg_match("#^[a-z0-9_-]+((\.[a-z0-9_-]+){1,})?@[a-z0-9_-]+((\.[a-z0-9_-]+){1,})?\.[a-z]{2,}$#i", $_POST['email'])) {
                                                        echo "<h2>L'adresse mail entrée est incorrecte</h2>";
                                                    } else {
                                                        if (empty($_POST['sujet'])) {
                                                            echo '<h2>Le champ "Sujet" est vide</h2>';
                                                        } else {
                                                            if (empty($_POST['name'])) {
                                                                echo '<h2>Le champ "Nom" est vide</h2>';
                                                            } else {
                                                                if (empty($_POST['message'])) {
                                                                    echo '<h2>Le champ "Message" est vide</h2>';
                                                                } else {
                                                                    $Entetes = "MIME-Version: 1.0\r\n";
                                                                    $Entetes .= "Content-type: text/html; charset=UTF-8\r\n";
                                                                    $Entetes .= "From: Portfolio <" . $fromMail . ">\r\n";
                                                                    $Entetes .= "Reply-To: Portfolio <" . $_POST['email'] . ">\r\n";
                                                                    $Mail = $_POST['email'];
                                                                    $Sujet = '=?UTF-8?B?' . base64_encode($_POST['sujet']) . '?=';
                                                                    $Message = htmlentities("Nom : " . $_POST['name'] . "\n\n" . "Message : " . $_POST['message'] . "\n\n" . 'Email: ' . $_POST['email'], ENT_QUOTES, "UTF-8");
                                                                    if (mail($myMail, $Sujet, nl2br($Message), $Entetes)) {
                                                                        echo "<h2>Merci beaucoup, le mail à été envoyé avec succès!</h2>";
                                                                    } else {
                                                                        echo "<h2>Une erreur est survenue, le mail n'a pas été envoyé</h2>";
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            } ?> <div class="btn btn-dark mb-5"> <a href="/">Retour au site</a> </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="mailTo"></div>
                </div>
            </div>
        </div>
    </header>
</body>

</html>