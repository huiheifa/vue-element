
const useMock = false // 是否使用mockurl
const mockBaseURL = ''

const fetch_config = {
  baseURL: useMock ? mockBaseURL : process.env.VUE_APP_BASE_API,
  timeout: 1500,
  headers: {
    'Content-Type': 'application/json'
  }
}
export default fetch_config
