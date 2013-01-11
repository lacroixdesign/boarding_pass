# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'boarding_pass/version'

Gem::Specification.new do |gem|
  gem.name          = "boarding_pass"
  gem.version       = BoardingPass::VERSION
  gem.authors       = ["Michael LaCroix", "James LaCroix"]
  gem.email         = ["info@lacroixdesign.net"]
  gem.description   = %q{Boarding Pass is a set of default stylesheets, mixins, and variables.}
  gem.summary       = %q{Boarding Pass uses Bourbon and Neat along with its own set of defaults to provide a starting point for web projects.}
  gem.homepage      = ""

  gem.files         = `git ls-files`.split($/)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.require_paths = ["lib"]

  gem.add_dependency('sass', '>= 3.2')
  gem.add_dependency('neat', '>= 1.1')
  gem.add_dependency('bourbon', '>= 3.0')
end
