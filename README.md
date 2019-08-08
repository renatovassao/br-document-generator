# Brazilian Document Generator

### Powered by [4Devs](https://www.4devs.com.br/)

```javascript
const generator = require("br-document-generator");

const creditCard = await generator.creditCard("master");

console.log(creditCard.number) // '4532107212798351',
console.log(creditCard.expirationDate) // '08/01/2021',
console.log(creditCard.cvv) // '799'
```