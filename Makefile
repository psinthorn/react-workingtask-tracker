# start react development environment
dev:
	npm start

# Production build
build:
	npm run build

# Deploy with local using Serve 
# install serve by run command below
# sudo npm i -g serve
# Serve on local by using command below
# serve -s build -p 8001
serve: 
	serve -s build -p 8001

jsonserver:
	npm run server


.PHONY: dev build serve jsonserver