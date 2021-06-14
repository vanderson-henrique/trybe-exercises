import smtplib
import ssl


class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self):
        meu_mailer = Mailer(
            "password_reset@teste.com", "myverysafepassword", self.email
        )
        meu_mailer.send_email(
            "Reset your password",
            "Instruções para resetar a senha, com o link de resetar",
        )


# Esta classe envia quaisquer tipos de emails quando chamado seu método
# 'send_email' Ao instanciar uma classe Mailer, nós passamos o email e a senha
# de envio e o email a ser enviado
class Mailer:
    def __init__(self, from_email, from_password, to_email):
        self.from_email = from_email
        self.from_password = from_password
        self.to_email = to_email

    def send_email(self, subject, message):
        body = f"Subject:{subject}\n\n{message}"
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(self.from_email, self.from_password)
            try:
                server.sendmail(self.from_email, self.to_email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise ValueError


meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
meu_user.reset_password()
