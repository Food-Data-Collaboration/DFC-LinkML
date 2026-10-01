Gem::Specification.new do |spec|
  spec.name          = 'dfc-linkml-connector'
  spec.version       = '2.0.4'
  spec.authors       = ["Data Food Consortium"]
  spec.email         = ["hello@fooddatacollaboration.org.uk"]
  spec.summary       = 'Generated LinkML schema'
  spec.description   = 'Ruby semantic object connector for the Data Food Consortium (DFC) standard.'
  spec.homepage      = "https://github.com/Food-Data-Collaboration/DFC-LinkML"
  spec.license       = "MIT"

  # LICENSE and README.md must ship: the MIT notice has to travel with the
  # gem for the licence to be enforceable.
  spec.files = Dir["lib/**/*.rb"] + Dir["vocabularies/**/*.jsonld"] \
    + Dir["contexts/**/*.json"] + ["LICENSE", "README.md"]
  spec.require_paths = ["lib"]

  spec.add_dependency "json-ld", "~> 3.3"
  spec.add_dependency "rdf", "~> 3.3"

  spec.add_development_dependency "rake", "~> 13.0"
  spec.add_development_dependency "rspec", "~> 3.0"

  spec.required_ruby_version = ">= 2.7.0"

  spec.metadata = {
    "rubygems_mfa_required" => "true"
  }
end
