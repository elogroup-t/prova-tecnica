# Instruções para o Desafio de Programação


* Você deve desenvolver um formulário HTML e uma rotina em Javascript (pode ser feito em Javascript puro ou utilizando qualquer framework open source) que envie via POST os dados deste formulário em formato JSON para o endpoint "http://localhost:8080".


O que você deve construir:


1. O Formulário deverá conter os seguintes campos:
	* Nome: Tipo Texto
	* Telefone: Tipo Texto
	* Como nos conheceu: Tipo Combo box (select) com as seguintes opções: Tv, Internet e outros.
	* Possui rede social: Tipo rádio com as opções Sim e Não. Ao clicar em Sim, habilitar o campo abaixo.
	* Quais: Tipo checkbox com as seguintes opções Facebook, LinkedIn e Instagram.
2. Validações
	* Nome deve ser obrigatório e conter ao menos um sobrenome.
	* Telefone deve possuir somente números no seguinte formato: 99 – 99999999.
	* Os valores informados nos checkbox somente podem ser enviados se o campo Possui rede social estiver marcado como Sim.
	* As opções selecionadas nos campos do tipo checkbox devem ser enviadas em um Array.
3. Considerações
	* As mensagens de validação podem ser emitidas por qualquer meio (alert, toast, dentre outros).
	* Após o envio (considerar que se as validações de campos estiverem ok o envio ocorrerá com sucesso) o botão de enviar deve ser desabilitado.
4. Os códigos desenvolvidos deverão ser "commitados" em um repositório do git hub e compartilhado em modo somente leitura com o seguinte usuário: ElogroupT-Felipe 
