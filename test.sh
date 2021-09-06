#!/bin/sh
cd js
echo "javascript test"
npm install
npm run lint
npm run test

cd ../typescript
echo "typescript test"
npm install
npm run lint
npm run test-ts

cd ../python
echo "python test"
pip install pytest
pytest -q
