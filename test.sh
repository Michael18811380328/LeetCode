#!/bin/sh

echo "javascript test"
cd js
npm install
echo 'run eslint'
npm run lint
sleep 1s
echo 'unit test'
npm run test
sleep 3s

echo "typescript test"
cd ../typescript
npm install
echo 'run eslint'
npm run lint
sleep 1s
echo 'unit test'
npm run test-ts
sleep 3s

echo "python test"
cd ../python
pip install pytest
pytest -q
sleep 1s
