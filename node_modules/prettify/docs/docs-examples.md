## Usage with Assemble
Use this helper in a ["parent" layout](http://assemble.io/docs/Layouts.html):

```handlebars
{{#prettify}}
  {{> body }}
{{/prettify}}
```
_See [nested layouts](http://assemble.io/docs/Layouts.html#nested-layouts)_.

## Indent Example

### Before

Using the `indent` option:

Template: `index.hbs`

```handlebars
{{#prettify indent="2"}}
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>
<h1>My Blog</h1>
<h2>Post of the day</h2>
<p>
Vestibulum posuere, quam sed bibendum posuere
Pellentesque habitant morbi tristique senectus
Pellentesque nulla augue, volutpat vitae
</p>
<a href="#">Read more...</a>
</body>
</html>
{{/prettify}}
```

### After

Renders to:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>My Blog</h1>
    <h2>Post of the day</h2>
    <p>
      Vestibulum posuere, quam sed bibendum posuere
      Pellentesque habitant morbi tristique senectus
      Pellentesque nulla augue, volutpat vitae
    </p>
    <a href="#">Read more...</a>
  </body>
</html>
```


## Condense Example

### Before

```html
<!DOCTYPE html>
<html lang="en">
  <head>

    <!-- code comment -->
    <meta charset="UTF-8">
    <title>Document</title>


  </head>


  <body>
    <h1>My Blog</h1>
    <h2>Post of the day</h2>


    <!-- scripts -->
    <a href="#">Read more...</a>


  </body>
</html>
```

Example output with `condensed: true`:

## After

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- code comment -->
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>My Blog</h1>
    <h2>Post of the day</h2>
    <!-- scripts -->
    <a href="#">Read more...</a>
  </body>
</html>
```

### Newlines

When used with `condense`, defining `newlines: true` will result in something like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>

    <!-- code comment -->
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>My Blog</h1>
    <h2>Post of the day</h2>

    <!-- scripts -->
    <a href="#">Read more...</a>
  </body>
</html>
```
