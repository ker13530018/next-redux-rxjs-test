// create action
export const TEST = 'test/init'
export const testInit = () => {
  return {
    type: TEST,
    loading: true,
    data: {},
  }
}

export const TEST_DONE = 'test/init/done'
export const testInitDone = data => ({
  type: TEST_DONE,
  loading: false,
  data: { ...data },
})

export const TEST_CANCEL = 'test/init/cancel'
export const testInitCancel = () => ({
  type: TEST_CANCEL,
  loading: false,
  data: {},
})
