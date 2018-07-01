import is from '@sindresorhus/is'

function keysIn (payload: object, keys: string[]): boolean {
  if (!is.object(payload)) {
    throw new TypeError('payload is should be object.')
  }
  if (
    !is.array(keys) ||
    keys.filter((key) => !is.string(key)).length
  ) {
    throw new TypeError('keys is should be Array<string>')
  }

  const missingKeys = keys.filter((key: string) => !(key in payload))
  return !missingKeys.length
}

export default keysIn
