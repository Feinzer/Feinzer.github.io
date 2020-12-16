const { execSync } = require('child_process')
const { time } = require('console')
const fs = require('fs-extra')
require('dotenv').config()

const deployFolder = '.deploy'
const buildFolder = 'dist'
const cwd = process.cwd()

if (!fs.pathExistsSync(deployFolder)) {
  console.error('Local deployment repository not found')
  console.log(`Cloning from ${process.env.GIT_REMOTE} into ${deployFolder}...\n`)
  execSync(`git clone -b master ${process.env.GIT_REMOTE} ${deployFolder}`, { cwd })
}

if (!fs.pathExistsSync(buildFolder)) throw 'Build directory not found'

console.log('Updating local deployment directory...\n')
fs.copySync(buildFolder, deployFolder, { overwrite: true })

let timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' UTC'

console.log(`Committing automated deployment ${timestamp}...\n`)
execSync([
  `cd ${deployFolder}`,
  'git add .',
  `git commit --allow-empty -m \"Automated deployment ${timestamp}\";`
].join('&&'), { cwd });

console.log('Pushing...\n');
execSync(`cd ${deployFolder} && git push ${process.env.GIT_REMOTE} master`, { cwd });

console.log('\nDeployment successful!\n')
