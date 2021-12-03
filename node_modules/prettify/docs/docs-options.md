## setting options

All options from [js-beautify](https://github.com/einars/js-beautify) are available in this helper, as well as a few custom options that were specially created for this helper. The helper comes with some sensible defaults (in the humble opinion of the helper creator), but it's easy to customize them if you need to. Here are are two (convenient) ways to set options:

* **options hash**: this is an easy way to set options on the helper, and it gives you the most granular control over how the helper renders content.
* **Assemble task options**: if you use both [Grunt](http://gruntjs.com/) and [Assemble](http://assemble.io), you can define options in your project's Gruntfile.


### options hash
By design, options define here will override options defined anywhere else.

```handlebars
{{#{%= safename %} indent=4}}
  {{> body }}
{{/{%= safename %}}}
```


### "assemble" task options
The helper can be used without [Grunt](http://gruntjs.com/) or [Assemble](http://assemble.io). But if you happen to use these two awesome tools you can define options for the helper in your Gruntfile in the `{%= safename %}` sub-options for Assemble:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      {%= safename %}: {
        condense: true,
        padcomments: true,
        indent: 4
      }
    },
    ...
  }
});
```

Options defined in the Assemble task can be viewed as custom "global" defaults, which can be overridden by options defined in the options hash.


## custom options

In addition to the options available from [js-beautify](https://github.com/einars/js-beautify), the following are custom options created specially for this helper.

### mode
Type: `String`
Default value: `html` (other options: `js`|`css`)

If you are formatting HTML, this does not need to be defined, but if you wish to format CSS or JavaScript you must specify either `js` or `css` respectively.

```js
{{#{%= safename %} mode="js" indent=4}}
function foo(str) {return str;}
{{/{%= safename %}}}
```

Note that when you change the mode, the available _and allowed_ options change as well. If you specify an option for the wrong mode, the helper may or may not throw an error, so be cautious. This can be a bit tricky if you're building a project that is using the {{prettify}} helper in several places with different modes. It's easy to forget that you have a layout wrapped like this:

```handlebars
{{#prettify indent=2}}
  {{> body }}
{{/prettify}}
```
and then do this on one of the pages that uses that layout:

```js
{{#{%= safename %} mode="js" indent=4}}
function foo(str) {return str;}
{{/{%= safename %}}}
```

This won't throw an error, but the JavaScript inside the "js" block will be re-formatted by the outter instance of the helper. So based on this example the JavaScript in the "js" block will be indented to **2 spaces**.


## option defaults

Here are the available options and defaults for each mode.

#### "html" mode

These options are available by default.

```js
{
  "indent_inner_html": false,   // Indent <head> and <body> sections
  "indent_size": 2,             // Indentation size
  "indent_char": " ",           // Indentation character. Can be an actual tab or space
  "brace_style": "expand",      // collapse|expand|end-expand
  "indent-scripts": "normal"    // keep|separate|normal
  "wrap_line_length": 78,       // Maximum characters per line (0 disables this)
  "unformatted": ["a", "sub", "sup", "b", "i", "u"], // List of tags that should not be reformatted (inline elements included by default)
  "preserve_newlines": true,    // Preserve existing line-breaks
  "max_preserve_newlines": 5,   // Maximum number of line-breaks to be preserved in one chunk

  // custom options made for this helper
  "indent": 2,          // convenience alias for indent_size
  "contense": false,    // remove extra newlines missed by js-beautify.
  "padcomments": false  // add an extra newline above each HTML code comment
}
```

#### "js" mode

When `mode` is set to `js`, the following options are available:

```js
{
  "indent_size": 2,
  "indent_char": " ",
  "indent_level": 0,
  "indent_with_tabs": false,
  "preserve_newlines": true,
  "max_preserve_newlines": 10,
  "jslint_happy": false,
  "brace_style": "collapse",
  "keep_array_indentation": false,
  "keep_function_indentation": false,
  "space_before_conditional": true,
  "break_chained_methods": false,
  "eval_code": false,
  "unescape_strings": false,
  "wrap_line_length": 0
}
```

#### "css" mode

When `mode` is set to `css`, the following options are available:

```js
{
  "indent_size": 2,
  "indent_char": " "
}
```


### indent
_Alias for `indent_size`_.
Type: `Number`
Default value: `2`

Number of spaces or tabs to indent the generated code. This option is an _alias for `indent_size`_.

### condense
Type: `Boolean`
Default value: `true`

Removes extra newlines and retains indenting:

### padcomments
Type: `Boolean`
Default value: `True`

Add a newline above each code comment:

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



