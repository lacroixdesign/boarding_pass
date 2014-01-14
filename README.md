# Boarding Pass

Default styles for websites using [Sass](http://sass-lang.com/). Compatible with both the original Ruby Sass and [node-sass](https://github.com/andrew/node-sass). Includes [Bourbon](http://bourbon.io/), [Neat](http://neat.bourbon.io/), [Typeplate](http://typeplate.com), and [Colors](http://clrs.cc).

## Installation

### node-sass

  npm install boarding-pass

Require the boarding-pass module and set Boarding Pass' `includePaths` property to node-sass' `includePaths` option.

  var sass = require('node-sass');
  var boardingPass = require('boarding-pass');
  
  sass.render({
      file: scss_filename,
      success: callback,
      includePaths: boardingPass.includePaths,
  });

This will load the paths for Boarding Pass, Bourbon, and Neat.

In your scss file, simply add:

    @import "boarding_pass";

### Rails 3.1+
Add to your `Gemfile`:

    gem 'boarding_pass'

Run:

    bundle install

In your `application.css.scss` file, add:

    @import "boarding_pass";


## Colors
The variable names from the Colors library have been changed slightly to include a prefix of `$default-`:

```
// Cool
$default-aqua:  #7fdbff;
$default-blue:  #0074d9;
$default-navy:  #001f3f;
$default-teal:  #39cccc;
$default-green: #2ecc40;
$default-olive: #3d9970;
$default-lime:  #01ff70;

// Warm
$default-yellow:  #ffdc00;
$default-orange:  #ff851b;
$default-red:     #ff4136;
$default-fuchsia: #f012be;
$default-purple:  #b10dc9;
$default-maroon:  #85144b;

// Gray Scale
$default-white:  #fff;
$default-silver: #ddd;
$default-gray:   #aaa;
$default-black:  #111;
```

## License

Copyright © 2013-2014 LaCroix Design Co.  
Released under the MIT License
