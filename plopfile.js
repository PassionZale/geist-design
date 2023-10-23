import * as component from './scripts/plop-generator/component'
import * as example from './scripts/plop-generator/example'

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('component', component.getGenerator())

  plop.setGenerator('example', example.getGenerator())
}
