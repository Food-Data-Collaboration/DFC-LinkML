Gem::Specification.new do |spec|
  spec.name          = 'dfc-linkml-connector'
  spec.version       = '2.0.0'
  spec.authors       = ["Data Food Consortium"]
  spec.email         = ["hello@fooddatacollaboration.org.uk"]
  spec.summary       = 'LinkML schema converted from DFC Business Ontology v2.0.0. Part of the DFC schema suite.'
  spec.description   = 'Ruby semantic object connector for the Data Food Consortium (DFC) standard.'
  spec.homepage      = "https://github.com/Food-Data-Collaboration/DFC-LinkML"
  spec.license       = "AGPL-3.0"

  spec.files = Dir["lib/**/*.rb"] + Dir["vocabularies/**/*.jsonld"]
  spec.require_paths = ["lib"]

  spec.required_ruby_version = ">= 2.7.0"

  spec.metadata = {
    "rubygems_mfa_required" => "true"
  }
end
