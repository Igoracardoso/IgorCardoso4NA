# Documentação Back-end
## Seção 1

- Lista 

Texto normal
> Esta é uma simulação

```python
def function(var1,var2):
    return var1+var2
```

```bash
npm install
```
# bookstore Star

O Bookstore Star é uma aplicação de uma livraria que visa ajudar os clientes e funcionarios a manter tudo organizado e dinamico.

## Requisitos Funcionais

Os requisitos funcionais descrevem as funcionalidades que o sistema deve oferecer. Aqui estão alguns exemplos:

- O sistema deve permitir que os funcionarios da livraria publiquem e editem sobre disponibilidades e status dos livros.

- O sistema deve permitir que os funcionarios bloqueem e desbloqueem os perfis de usuarios com status diferentes.

- O sistema deve permitir que os usuários reservem livros e agende a data de devolção.

- O sistema deve permitir que os usuarios após a entrega do livro alugado, avaliem e conte uma breve esperiencia do livro com filtro de spoiler para outros usuarios.

- O sistema deve permitir que usuarios com pagamento pendente ou livros ja alugados não possam reservar outros.

## Requisitos Não Funcionais

Os requisitos não funcionais são critérios que podem ser usados para julgar a operação de um sistema, em vez de comportamentos específicos. Exemplos incluem:

- O sistema deve ser capaz de suportar até 500 usuários simultâneos.

- O tempo de resposta para qualquer operação deve ser inferior a 5 segundos.

- O sistema deve ser compatível com os navegadores mais populares.

- O sistema deve garantir a segurança dos dados do usuário através de criptografia.

- O sistema deve garantir que livros esgotados ou ja alugados não possam ser reservados por outro usuario

- O sistema deve garantir a confiabilidade de dados e sistemas de transação segura.

## Dependências

As dependências são bibliotecas e ferramentas necessárias para o funcionamento do projeto. As principais dependências incluem:

- **TypeScript**: Para desenvolvimento em TypeScript.
- **Node.js**: Para execução do ambiente de backend.
- **Express**: Para criação de APIs RESTful.
- **MongoDB**: Para armazenamento de dados.
- **JWT (JSON Web Tokens)**: Para autenticação de usuários.

## Análise de Risco

A análise de risco identifica potenciais problemas que podem impactar o projeto. Os principais riscos incluem:

1. **Atrasos no Desenvolvimento**: Mudanças nos requisitos podem causar atrasos. Para mitigar, é importante ter uma comunicação clara com as partes interessadas.
2. **Problemas de Segurança**: Vulnerabilidades podem ser exploradas. A implementação de práticas de segurança rigorosas é fundamental.
3. **Dependências de Terceiros**: Atualizações ou mudanças em bibliotecas externas podem causar problemas. Monitorar as dependências regularmente pode ajudar a mitigar esse risco.
4. **Desempenho**: O sistema pode não suportar a carga esperada. Testes de carga devem ser realizados durante o desenvolvimento.

## Comandos de Inicialização do TypeScript

Para iniciar o projeto utilizando TypeScript, siga os passos abaixo:

1. **Instalação das Dependências**:
   ```bash
   npm install
   ```

2. **Compilação do TypeScript**:
   Para compilar o código TypeScript, execute:
   ```bash
   npx tsc
   ```

3. **Execução do Servidor**:
   Após compilar, inicie o servidor com:
   ```bash
   node dist/index.js
   ```
   (Certifique-se de que o arquivo `index.js` está no diretório `dist` após a compilação.)

4. **Modo de Desenvolvimento**:
   Para executar o projeto em modo de desenvolvimento com recarregamento automático, utilize:
   ```bash
   npx ts-node-dev src/index.ts
   ```

## Conclusão

Este README fornece uma visão abrangente do projeto, abordando todos os aspectos essenciais para o desenvolvimento e execução. Para mais informações, consulte a documentação adicional ou entre em contato com a equipe de desenvolvimento.

Autor: Igor Cardoso