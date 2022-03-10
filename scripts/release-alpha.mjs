#!/usr/bin/env zx

// HEADのcommit hashを取得
const { stdout: hash } = await $`git rev-parse HEAD`;

// commit hash で package.json の version を bump
// MEMO: hash変数に改行コードが入るので削除している
await $`standard-version --prerelease alpha.${hash.replace(
  /\r?\n/g,
  ''
)} --skip.tag --skip.changelog --skip.commit`;
