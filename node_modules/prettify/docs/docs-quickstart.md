In the root of the project in which you plan to use the helper, in the command line run:

```bash
npm i {%= name %} --save
```

Use within your application with the following line of JavaScript:

```js
var helpers = require('{%= safename %}');
```

Now your handlebars instance will have access to the {{{%= safename %}}} helper.

