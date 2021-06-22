import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    core.setOutput('release-url', 'https://example.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

export { run }
