name: Node.js CI 
on:


push:


branches: [ main ]


pull_request:


branches: [ main ]


jobs:


build:


runs-on: ubuntu-latest


strategy:


matrix:


node-version: [12.x, 14.x, 16.x]


steps:



name: Checkout repository


uses: actions/checkout@v2



name: Setup Node.js


uses: actions/setup-node@v2


with:


node-version: ${{ matrix.node-version }}



name: Install dependencies


run: npm install



name: Run tests


run: npm test
