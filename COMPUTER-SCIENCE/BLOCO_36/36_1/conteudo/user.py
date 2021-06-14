class User:
    def __init__(self, name, email, password):
        """ Método construtor da classe User. Note que
        o primeiro parâmetro deve ser o `self`. Isso é
        uma particularidade de Python, vamos falar mais
        disso adiante!"""
        self.name = name
        self.email = email
        self.password = password

# Função que reseta a senha, ela fica dentro da classe User e pode ser chamada
# através do objeto que foi instanciado através desta classe
    def reset_password(self):
        print("Envia email de reset de senha")


# Para invocar o método construtor, a sintaxe é NomeDaClasse(parametro 1, parametro 2)
# Repare que o parâmetro self foi pulado -- um detalhe do Python.
meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
print(meu_user)
print(meu_user.name)
print(meu_user.email)
print(meu_user.password)

# A variável `meu_user` contém o objeto criado pelo construtor da classe User!

# Chamada da função através do objeto 'meu_user' criado através da classe User
# Agora este objeto tem acesso não só a todas as chaves da classe mas também às
# funções.
meu_user.reset_password()