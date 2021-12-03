/**
 * {{prettify}} by Jon Schlinkert
 * http://github.com/helpers/prettify
 *
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */

'use strict';

exports.html = {
  indent: 2,
  condense: true,
  padcomments: true,
  indent_char: ' ',
  indent_size: 2,
  indent_inner_html: true,
  unformatted: ['code', 'pre', 'em', 'strong']
};


exports.css = {
  indent_size: 2,
  indent_char: ' '
};


exports.js = {
  indent_size: 2,
  indent_char: ' ',
  indent_level: 0,
  indent_with_tabs: false,
  preserve_newlines: true,
  max_preserve_newlines: 10,
  jslint_happy: true,
  brace_style: 'collapse',
  keep_array_indentation: false,
  keep_function_indentation: false,
  space_before_conditional: true,
  break_chained_methods: false,
  eval_code: false,
  unescape_strings: false,
  wrap_line_length: 0
};

