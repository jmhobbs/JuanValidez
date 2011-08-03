VERSION=0.0.1
SRC=src
YUI=/opt/YUI/build/yuicompressor-2.4.6.jar

BASIC=$(SRC)/juan-validez-core.js $(SRC)/juan-validez-rules-basic.js
FULL=$(SRC)/juan-validez-core.js $(SRC)/juan-validez-rules-basic.js

all: coremin fullmin

basic: $(BASIC)
	cat $(BASIC) > juan-validez-basic-$(VERSION).js

full: $(FULL)
	cat $(FULL) > juan-validez-full-$(VERSION).js

coremin: basic
	java -jar $(YUI) juan-validez-basic-$(VERSION).js -o juan-validez-basic-$(VERSION)-min.js

fullmin: full
	java -jar $(YUI) juan-validez-full-$(VERSION).js -o juan-validez-full-$(VERSION)-min.js 

clean:
	rm *.js

