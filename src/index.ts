#!/usr/bin/env node

import commandLineArgs from 'command-line-args'
import commandLineArgsDefinitions from './utils/command_line_args_definitions'
import displayHelp from './utils/display_help'
import verifyPristineState from './utils/verify_pristine_state'

const commandLineArguments = commandLineArgs(commandLineArgsDefinitions)

const run = async () => {
  if (commandLineArguments.help) {
    displayHelp(commandLineArgsDefinitions)
    process.exit(0)
  }

  await verifyPristineState()

  console.log('mergito', commandLineArguments)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
