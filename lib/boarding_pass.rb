require "bourbon"
require "neat"
require "boarding_pass/version"

module BoardingPass
  if defined?(Rails) && defined?(Rails::Engine)
    require 'boarding_pass/engine'
    # class Engine < ::Rails::Engine
    #   require 'boarding_pass/engine'
    # end
  end
end
