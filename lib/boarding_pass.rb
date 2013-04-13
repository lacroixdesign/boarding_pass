require "bourbon"
require "neat"
require "boarding_pass/version"

module BoardingPass
  if defined?(Rails) && defined?(Rails::Engine)
    require 'boarding_pass/engine'
  else
    Sass.load_paths << File.expand_path("../../app/assets/stylesheets", __FILE__)
  end
end
