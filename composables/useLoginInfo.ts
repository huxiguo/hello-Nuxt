export const useLoginInfo = () => {
  return useState('loginInfo', () => {
    return {
      username: 'zs',
      password: 'asda',
      email: 'dsads',
      token: 'dsadas',
      isLoggedIn: false,
      isAdmin: false
    }
  })
}
