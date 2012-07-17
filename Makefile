VERSION=0.1.0
SRC=src
YUI=/opt/YUI/build/yuicompressor-2.4.7.jar

BASIC=$(SRC)/core.js $(SRC)/rules/basic.js
FULL=$(SRC)/core.js $(SRC)/rules/basic.js $(SRC)/rules/lol.js
JQUERY=$(SRC)/ext/juan-validez-jquery.js

all: coremin fullmin node jquerymin

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

jquerymin: $(JQUERY)
	java -jar $(YUI) $(JQUERY) -o juan-validez-jquery-$(VERSION)-min.js 

clean:
	rm *.js

