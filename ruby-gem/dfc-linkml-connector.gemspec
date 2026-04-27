# DFC LinkML Connector Gem
#
# Build Requirements:
#   sudo apt install -y build-essential libssl-dev libreadline-dev zlib1g-dev libyaml-dev
#
# This gem provides JSON-LD connectivity for DFC platform data interchange,
# generated from LinkML schema.

Gem::Specification.new do |spec|
  spec.name          = 'dfc-linkml-connector'
  spec.version      = '2.0.0'
  spec.authors      = ["Data Food Consortium"]
  spec.email        = ["hello@fooddatacollaboration.org.uk"]
  spec.summary     = "DFC connector gem generated from LinkML schema for JSON-LD data exchange"
  spec.description = "Ruby gem for integrating the DFC standard within your application. Generated from LinkML schema to provide JSON-LD serialization for platform data exchange."
  spec.homepage    = "https://github.com/Food-Data-Collaboration/DFC-LinkML"
  spec.license     = "MIT"

  spec.files        = Dir["lib/**/*.rb", "vocabularies/*.json"]
  spec.require_path = "lib"

  spec.add_runtime_dependency "virtual_assembly-semantizer", "~> 1.0", ">= 1.0.5"

  spec.metadata = {
    "rubygems_mfa_required" => "true"
  }
end