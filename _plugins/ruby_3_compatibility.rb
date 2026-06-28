# Jekyll/Liquid compatibility patch for Ruby 3.2+
# Ruby 3.2 removed Object#tainted?, Object#taint, and Object#untaint, 
# which Liquid 4.0.3 still uses.

puts "===================================================="
puts "LOADING COMPATIBILITY PATCH FOR RUBY 3.2+ IN PLUGINS"
puts "===================================================="

unless Object.method_defined?(:tainted?)
  class Object
    def tainted?
      false
    end
    
    def taint
      self
    end
    
    def untaint
      self
    end
  end
end

