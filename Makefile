.DEFAULT_GOAL := check

init:
	@echo "Initializing the project"
	@npm install

start:
	@echo "Starting the project on Dockerizing Server"
	@sh scripts/server.start.sh

test:
	@echo "🧪 Local Testing"
	@npm test

integration_test:
	@echo "🧪 Testing the project on Docker"
	@sh scripts/integration.test.sh

--pre_check:
	@npm install
	@npm run lint

check: --pre_check test build
	@echo "✅"