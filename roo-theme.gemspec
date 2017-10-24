# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "roo-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Marcus 'Zyntox' Nilsson"]
  spec.email         = ["marcusnilsson.webb@gmail.com"]

  spec.summary       = "A jekyll theme created for the blog 'Adventures in kangaroo lands'."
  spec.homepage      = "https://zyntox.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.6"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
