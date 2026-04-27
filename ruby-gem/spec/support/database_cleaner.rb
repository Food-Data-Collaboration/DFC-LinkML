# frozen_string_literal: true

module DatabaseCleanerSupport
  def clean_tables
    ActiveRecord::Base.connection.execute(
      "TRUNCATE TABLE #{ActiveRecord::Base.connection.tables.reject { |t| 
        ['schema_migrations', 'ar_internal_metadata'].include?(t)
      }.join(', ')} CASCADE"
    )
  end
end

RSpec.configure do |config|
  config.include DatabaseCleanerSupport

  config.before(:each) do
    clean_tables
  end
end
