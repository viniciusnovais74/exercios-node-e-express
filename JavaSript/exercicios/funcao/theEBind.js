const Pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
Pessoa.falar()
const falar = Pessoa.falar
falar()
const falarDePessoa = Pessoa.falar.bind(Pessoa)
falarDePessoa()