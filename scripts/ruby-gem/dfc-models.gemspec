Gem::Specification.new do |spec|
  spec.name          = 'dfc-models'
  spec.version      = '2.0.0'
  spec.authors      = ["Food Data Collaboration"]
  spec.email        = ["hello@fooddatacollaboration.org.uk"]
  spec.summary     = "LinkML schema converted from DFC Business Ontology v2.0.0 by Food Data Collaboration."
  spec.description  = "LinkML schema converted from DFC Business Ontology v2.0.0 by Food Data Collaboration."
  spec.homepage    = "https://github.com/Food-Data-Collaboration/DFC-LinkMML"
  spec.license     = "MIT"

  spec.files        = Dir["lib/**/*.rb"]
  spec.require_path = "lib"

  spec.add_runtime_dependency "activerecord", "~> 7.0"
  spec.add_runtime_dependency "pg", "~> 1.4"
end
