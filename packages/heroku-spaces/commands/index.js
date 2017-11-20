'use strict'

const cli = require('heroku-cli-util')
const co = require('co')
const {flags} = require('cli-engine-heroku')

function display (spaces) {
  cli.table(spaces, {
    columns: [
      {key: 'name', label: 'Name'},
      {key: 'team.name', label: 'Team'},
      {key: 'region.name', label: 'Region'},
      {key: 'state', label: 'State'},
      {key: 'created_at', label: 'Created At'}
    ]
  })
}

function displayJSON (spaces) {
  cli.log(JSON.stringify(spaces, null, 2))
}

function * run (context, heroku) {
  const sortBy = require('lodash.sortby')
  let team = context.org || context.team || context.flags.team

  let spaces = yield heroku.get('/spaces')
  if (team) {
    spaces = spaces.filter((s) => s.team.name === team)
  }
  spaces = sortBy(spaces, 'name')
  if (context.flags.json) displayJSON(spaces)
  else if (spaces.length === 0) {
    if (team) throw new Error(`No spaces in ${cli.color.cyan(team)}.`)
    else throw new Error('You do not have access to any spaces.')
  } else {
    display(spaces)
  }
}

module.exports = {
  topic: 'spaces',
  description: 'list available spaces',
  needsAuth: true,
  wantsOrg: true,
  flags: [
    {name: 'json', description: 'output in json format'},
    flags.team({name: 'team', hasValue: true})
  ],
  run: cli.command(co.wrap(run))
}
