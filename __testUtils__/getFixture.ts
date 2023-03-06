/* eslint-disable */
const path = require('path');
const fs = require('fs');

const getFixturePath = (filename: string): string =>
  path.join(__dirname, '..', '__fixtures__', filename);

const getFixture = (filename: string): Record<string, any> =>
  JSON.parse(fs.readFileSync(getFixturePath(filename), 'utf-8'));

export default getFixture;
