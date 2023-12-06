# TypeScript with Node

## Initialize Node Project

```bash
npm init -y
```

## Install TypeScript in the project

```bash
npm i -D typescript
```

## Install Prettier Daemon (to use on the editor, is faster)

```bash
npm i -D @fsouza/prettierd
```

## Install Prettier (to use on the CLI)

```bash
npm i -D prettier
```

## Install ESlint Daemon (to use on the editor, is faster)

```bash
npm i -D eslint_d
```

## Install ESlint (to use on the CLI)

```bash
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Install ESLint-Prettier integration

```bash
npm i -D eslint-config-prettier
```

Create ESLint config file:

```bash
npm init @eslint/config

```

Run ESLint on src from CLI:

```bash
npx eslint src --ext .ts

```

Run ESLint on src/app.ts from CLI:

```bash
npx eslint src/app.ts

```

## Create .gitignore file for Node

```bash
npx gitignore node
```

## Compile TypeScript

```bash
npx tsc
```

## Run compiled TypeScript

```bash
node dist/example.js

```

## Compile and Run TypeScript

```bash
npx tsc
npx node dist/example.js
```

Or:

```bash
npm run start
```

Or:

```bash
npm start
```

## Node.js Worker Threads

Install module:
Worker threads works with .js or .jsx, for now I managed to make it work directly with .js
TODO: Workers with TypeScript

```bash
npm install --save @types/node
```

### Workers with .js

Run ./src/concurrency/threads-example.js

```bash
node src/concurrency/threads-example.js
```
