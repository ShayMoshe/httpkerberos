httpkerberos 
=========


Alfa version


httpkerberos - http requst with Kerberos authentication

## Installation

```shell
  npm install https://github.com/ShayMoshe/httpkerberos.git --save
```

## Usage

```js
var httpkerberos = require('httpkerberos');

var options = {
    url: "https://yourservice.intel.com/api"
};

httpkerberos.get(options, function(err, result) {
    if (err) {
      console.error(err);
    }            
    console.log(result);
});
```

## Tests

```shell
  npm test
```

## Release History

* 0.0.1 Alfa version
