# PREREQUISITE: Node.js, BASH shell

BOWER = $(CURDIR)/node_modules/.bin/bower

install: node_modules bower_components build

clean:
	rm -rf ./node_modules/ ./bower_components/ ./public/css/* #./public/bower_components

node_modules:
	npm install

bower_components:
	$(BOWER) install
	# link bower_components to public (for now)
	# ln -sfv $(CURDIR)/bower_components $(CURDIR)/public

mongo:
	# prep database dir
	mkdir -p ./data/mongodb

build: mongo
	# Hand off build to Gulpfile?...
	# Previously, there was a 'grunt build' task which just ran sass
