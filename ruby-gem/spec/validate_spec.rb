require 'spec_helper'

# validate() reports what the ontology requires and the object lacks.
#
# The constraint data is the 42 class-scoped `rdfs:subClassOf` restrictions,
# every one of which is a singleton. Constructors deliberately stay permissive:
# enforcing these would reject ordinary documents, so they are opt-in here.
RSpec.describe DfcLinkmlConnector::Core::Connector do
  let(:connector) { described_class.new }

  def slots_of(issues)
    issues.map { |i| i[:slot] }.sort
  end

  it 'reports every ontology-required property that is absent' do
    # Order is restricted to exactly one each of belongsTo, orderedBy, selects
    # and uses.
    order = DfcLinkmlConnector::Models::Order.new('https://x/o1', orderNumber: 'A1')
    expect(slots_of(connector.validate(order)))
      .to eq(%w[belongs_to ordered_by selects uses])
  end

  it 'carries the predicate so the report can be acted on' do
    issue = connector.validate(DfcLinkmlConnector::Models::Order.new('https://x/o1')).first
    expect(issue[:predicate]).to start_with('dfc-b:')
    expect(issue[:semanticType]).to eq('dfc-b:Order')
    expect(issue[:semanticId]).to eq('https://x/o1')
  end

  it 'drops a property from the report once it is set' do
    full = DfcLinkmlConnector::Models::Order.new(
      'https://x/o2',
      orderNumber: 'A2', belongsTo: 'https://x/sale', orderedBy: 'https://x/org',
      selects: 'https://x/opt', uses: 'https://x/step'
    )
    expect(connector.validate(full)).to be_empty
  end

  it 'inherits an ancestor restriction' do
    org = DfcLinkmlConnector::Models::Organization.new('https://x/org', name: 'SIO')
    expect(slots_of(connector.validate(org))).to eq(%w[has_main_contact])
  end

  it 'says nothing about a class the ontology does not restrict' do
    # An Organization carries hasAddress, but the ontology restricts that on
    # PhysicalPlace only -- so Agent is unconstrained and must not be flagged.
    org = DfcLinkmlConnector::Models::Organization.new(
      'https://x/org2', mainContact: 'https://x/p'
    )
    expect(connector.validate(org)).to be_empty
  end

  it 'accepts several objects at once' do
    types = connector.validate(
      DfcLinkmlConnector::Models::Order.new('https://x/o3'),
      DfcLinkmlConnector::Models::Organization.new('https://x/org3')
    ).map { |i| i[:semanticType] }
    expect(types).to include('dfc-b:Order', 'dfc-b:Organization')
  end

  it 'does not raise on an object that fails -- that is the point' do
    line = DfcLinkmlConnector::Models::OrderLine.new('https://x/l1')
    expect { connector.validate(line) }.not_to raise_error
    expect(slots_of(connector.validate(line))).to eq(%w[concerns part_of])
  end
end
