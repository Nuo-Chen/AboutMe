#!/bin/bash
bundle exec ruby -I . -r _plugins/ruby_3_compatibility -S jekyll build "$@"
