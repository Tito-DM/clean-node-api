import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('should return 400 if no name is provided ', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'pyong@gmail.com',
        password: 'password',
        passwordConfirmation: 'password'

      }
    }
    const response = sut.handle(httpRequest)
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new Error('Missing param: name'))
  })
})
