import keysIn from './index'

describe('index.ts', () => {

  describe('when payload type is not object', () => {
    it('should be throws TypeError', () => {
      const payload: any = null
      const keys = ['name', 'email']
      expect(() => keysIn(payload, keys)).toThrow()
    })
  })

  describe('when payload type is not object', () => {
    it('should be throws TypeError', () => {
      const payload = { name: 'potato4d' }
      const keys: any = null
      expect(() => keysIn(payload, keys)).toThrow()
    })
  })

  describe('when all keys exist', () => {
    it('should be returns true', () => {
      const payload = { name: 'potato4d', email: 'mail@potato4d.me' }
      const keys = ['name', 'email']
      expect(keysIn(payload, keys)).toBeTruthy()
    })
  })

  describe('When there is a key that does not exist', () => {
    it('should be returns false', () => {
      const payload = { name: 'potato4d' }
      const keys = ['name', 'email']
      expect(keysIn(payload, keys)).toBeFalsy()
    })
  })
})
