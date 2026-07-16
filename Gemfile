source "https://rubygems.org"

# This mirrors exactly what GitHub Pages runs in production.
# Running `bundle exec jekyll serve` locally will behave the same as the
# live site.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-sitemap"
end

# Windows/JRuby compatibility (safe to leave in on Mac/Linux too)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw]
