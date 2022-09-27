#!/bin/bash

set -eu

echo "🔨 Build and run Dockers"
docker-compose build

echo "Up Server and Database"
docker-compose up -d server mongo

echo "🏃‍♂️ Running Server"
npm run dev