# DFC LinkML Connector - Build Requirements

## System Dependencies (Ubuntu/Debian)

Install these before building Ruby:

```bash
sudo apt update
sudo apt install -y \
  build-essential \
  git \
  curl \
  libssl-dev \
  libreadline-dev \
  zlib1g-dev \
  libyaml-dev      # Required for psych (YAML) extension
```

## Ruby Installation

### Using rbenv (recommended)
```bash
# Install rbenv
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

# Add to ~/.bashrc
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc

# Install Ruby
rbenv install 3.2.4
rbenv global 3.2.4
```

### Using ruby-build directly
```bash
RUBY_CONFIGURE_OPTS="--with-libyaml-dir=/usr" rbenv install 3.2.4
```

## Gem Dependencies

```bash
gem install bundler
gem install rspec
```

## Verify Build

```bash
ruby --version    # Should be 3.2.4
rspec --version # Should be 3.x.x
```

## Run Tests

```bash
cd /path/to/ruby-gem
bundle install
rspec
```