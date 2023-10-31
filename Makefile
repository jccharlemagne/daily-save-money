DOCKER_BUILDKIT=1

init: network setup-docker-compose setup-certs build

network:

setup-certs:
	@./scripts/create-certs

setup-docker-compose:
	test -s ./docker-compose.override.yaml || ln -s ./docker-compose.dev.yaml ./docker-compose.override.yaml

build:
	lerna run build
