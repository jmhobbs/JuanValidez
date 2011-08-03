VERSION=0.0.1
SRC=src
YUI=/opt/YUI/build/yuicompressor-2.4.6.jar

BASIC=$(SRC)/core.js $(SRC)/rules/basic.js
FULL=$(SRC)/core.js $(SRC)/rules/basic.js $(SRC)/rules/lol.js

all: coremin fullmin node

basic: $(BASIC)
	cat $(BASIC) > juan-validez-basic-$(VERSION).js

full: $(FULL)
	cat $(FULL) > juan-validez-full-$(VERSION).js

node: full
	cp juan-validez-full-$(VERSION).js juan-validez-node-$(VERSION).js
	echo "\nmodule.exports = JuanValidez;" >> juan-validez-node-$(VERSION).js

coremin: basic
	java -jar $(YUI) juan-validez-basic-$(VERSION).js -o juan-validez-basic-$(VERSION)-min.js

fullmin: full
	java -jar $(YUI) juan-validez-full-$(VERSION).js -o juan-validez-full-$(VERSION)-min.js 

clean:
	rm *.js

