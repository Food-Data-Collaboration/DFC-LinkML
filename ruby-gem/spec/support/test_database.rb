# frozen_string_literal: true

module TestDatabase
  class << self
    def setup
      connect
      create_test_db if missing_test_db?
      run_migrations
    end

    def connect
      ActiveRecord::Base.establish_connection(
        adapter: 'postgresql',
        host: ENV.fetch('POSTGRES_HOST', 'localhost'),
        port: ENV.fetch('POSTGRES_PORT', 5432),
        database: 'postgres',
        username: ENV.fetch('POSTGRES_USER', 'postgres'),
        password: ENV.fetch('POSTGRES_PASSWORD', '')
      )
    end

    def create_test_db
      ActiveRecord::Base.connection.drop_database 'dfc_models_test' if missing_test_db?
      ActiveRecord::Base.connection.create_database 'dfc_models_test'
    rescue ActiveRecord::DatabaseAlreadyExists
      nil
    ensure
      ActiveRecord::Base.establish_connection(
        adapter: 'postgresql',
        host: ENV.fetch('POSTGRES_HOST', 'localhost'),
        port: ENV.fetch('POSTGRES_PORT', 5432),
        database: 'dfc_models_test',
        username: ENV.fetch('POSTGRES_USER', 'postgres'),
        password: ENV.fetch('POSTGRES_PASSWORD', '')
      )
    end

    def missing_test_db?
      !ActiveRecord::Base.connection.database_exists? rescue false
    end

    def run_migrations
      ActiveRecord::MigrationContext.new(db_migrate_path).migrate
    end

    def db_migrate_path
      @db_migrate_path ||= begin
        path = File.expand_path('../../db/migrate', __dir__)
        raise "Migrations path not found: #{path}" unless Dir.exist?(path)
        path
      end
    end

    def cleanup
      ActiveRecord::Base.connection.tables.each do |table|
        next if ['schema_migrations', 'ar_internal_metadata'].include?(table)
        ActiveRecord::Base.connection.execute("TRUNCATE TABLE \"#{table}\" CASCADE")
      end
    end
  end
end

RSpec.configure do |config|
  config.before(:suite) do
    TestDatabase.setup
  end

  config.after(:each) do
    TestDatabase.cleanup
  end

  config.after(:suite) do
    ActiveRecord::Base.connection.disconnect!
  end
end
