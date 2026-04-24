Gem::Specification.new do |spec|
  spec.name          = 'dfc-models'
  spec.version      = '2.0.0'
  spec.authors      = ["Data Food Consortium"]
  spec.email        = ["hello@fooddatacollaboration.org.uk"]
  spec.summary     = "LinkML schema converted from DFC Business Ontology v2.0.0. Part of the DFC schema suite."
  spec.description  = "LinkML schema converted from DFC Business Ontology v2.0.0. Part of the DFC schema suite."
  spec.homepage    = "https://github.com/Food-Data-Collaboration/DFC-LinkML"
  spec.license     = "AGPL-3.0"

  spec.files        = Dir["lib/**/*.rb"]
  spec.require_path = "lib"

  spec.add_runtime_dependency "activerecord", "~> 7.0"
  spec.add_runtime_dependency "pg", "~> 1.4"
  spec.metadata = {
    "rubygems_mfa_required" => "true"
  }
end
