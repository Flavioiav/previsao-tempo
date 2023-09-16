# API de Previsão do Tempo

Esta é uma API simples de Previsão do Tempo que fornece informações meteorológicas atuais para uma cidade específica. A API utiliza a Weatherstack, uma plataforma de previsão do tempo, para obter dados meteorológicos precisos.

## Como Usar

### Solicitar Previsão do Tempo

Você pode solicitar a previsão do tempo para uma cidade específica fazendo uma solicitação GET para o seguinte endpoint:

http://localhost:3000/previsao-tempo?cidade=NOME_DA_CIDADE

Substitua `NOME_DA_CIDADE` pelo nome da cidade para a qual deseja obter a previsão do tempo. A API retornará a temperatura atual e uma breve descrição do clima para a cidade.

#### Exemplo de Solicitação

GET http://localhost:3000/previsao-tempo?cidade=Maringa

#### Resposta

```json
{
  "cidade": "Nova York",
  "temperatura": 22.1,
  "descricao": "Parcialmente nublado"
}
```

## Configuração

Antes de usar esta API, certifique-se de configurar sua chave de API do Weatherstack. Substitua `'SUA_CHAVE_API_DO_WEATHERSTACK_AQUI'` no arquivo `app.js` pela sua chave de API válida.

const WEATHERSTACK_API_KEY = 'SUA_CHAVE_API_DO_WEATHERSTACK_AQUI';

## Executando o Aplicativo

Para executar a API, siga estas etapas:

1. Clone este repositório.
2. Instale as dependências com `npm install`.
3. Execute o aplicativo com node `app.js`.

A API estará disponível em `http://localhost:3000`.

## Requisitos

- Node.js
- Chave de API válida do Weatherstack

## Limitações

Esta API utiliza a versão gratuita da API Weatherstack, que tem limitações em relação ao número de solicitações permitidas e aos recursos disponíveis. Certifique-se de revisar as políticas de uso da Weatherstack para entender essas limitações.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar solicitações de pull (pull requests) para melhorar esta API.
