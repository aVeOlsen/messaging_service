echo "*** Starting DOCKER containers... ***"
docker-compose build
docker-compose up -d

echo "*** Updating node dependencies... ***"
docker-compose exec naxela_service yarn install

echo "*** Running Gulp .. ***"
docker-compose exec naxela_service yarn run ntl dev
#dev