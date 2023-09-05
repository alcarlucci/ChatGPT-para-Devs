<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    // Endereço de e-mail para onde você deseja enviar o formulário
    $destinatario = "seu@email.com";

    // Assunto do e-mail
    $assunto = "Formulário de Contato";

    // Mensagem de e-mail
    $mensagem_email = "Nome: $nome\n";
    $mensagem_email .= "E-mail: $email\n";
    $mensagem_email .= "Mensagem:\n$mensagem";

    // Cabeçalhos do e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar e-mail
    if (mail($destinatario, $assunto, $mensagem_email, $headers)) {
        echo "Obrigado por entrar em contato. Seu e-mail foi enviado com sucesso.";
    } else {
        echo "Desculpe, ocorreu um erro ao enviar o e-mail.";
    }
} else {
    echo "Acesso direto a este script não é permitido.";
}
?>
