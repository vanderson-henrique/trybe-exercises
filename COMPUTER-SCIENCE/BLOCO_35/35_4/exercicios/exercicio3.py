# Exercício 3 Faça uma função que valide um e-mail nos seguintes critérios
# abaixo, lançando uma exceção quando o valor for inválido. Endereços de email
# válidos devem seguir as seguintes regras:
# Devem seguir o formato nomeusuario@nomewebsite.extensao;
# O nome de usuário deve conter somente letras, dígitos, traços e underscores ;
# O nome de usuário deve iniciar com letra;
# O nome do website deve conter somente letras e dígitos;
# O tamanho máximo da extensão é três.


def valida_email(email):
    username = email.split("@")[0]
    website = email.split("@")[1].split(".")[0]
    extension = email.split("@")[1].split(".")[1]

    if not username[0].isalpha():
        raise ValueError("Username deve iniciar com uma letra")
    for letter in username:
        if (
            not letter.isalpha()
            and not letter.isdigit()
            and letter not in ("_", "-")
        ):
            raise ValueError(
                "Username só deve possuir letras, números, traços e underscor"
            )
    for letter in website:
        if (not letter.isalpha() and not letter.isdigit()):
            raise ValueError(
              "O website só deve conter números e letras"
            )
    if len(extension) > 3:
        raise ValueError("O tamanho máximo da extensão é 3")


valida_email("vh123_-b@gmail.com")
