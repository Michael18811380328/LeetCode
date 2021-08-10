#!/bin/sh

echo "javascript test"
cd js
npm install
echo 'run eslint'
npm run lint
sleep 1s
echo 'unit test'
npm run test
sleep 1s

# npm run lint
# todo pytest
# cd typescript && npm install && npm run test-ts &&
# todo pytest
#    - run: npm ci
#    - run: npm run build --if-present
