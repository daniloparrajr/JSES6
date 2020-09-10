# Template Literals

Provides an easy way to concatenate strings without the use of plus and single comma symbols.
```javascript
let firstName = 'Danilo';
let LastName = 'Parra';

// const fullname = firstName + ' ' +  LastName;
const fullname = `${firstName} ${LastName}`;
```

Provides an easy way to handle variables within the template.
```javascript
let num1 = 5;
let num2 = 5;

// const fullname = firstName + ' ' +  LastName;
const total = `Total: ${num1 + num2}`;
```

Provides an easy and clean way to have multiple lines strings. 
```javascript
let firstName = 'Danilo';
let LastName = 'Parra';

// const fullname = firstName + ' ' +  LastName;
const fullname = `${firstName} 
${LastName}`;
```