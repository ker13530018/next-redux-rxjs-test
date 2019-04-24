// create action
export const HOME = 'home/init'
export const homeInit = () => {
  return {
    type: HOME,
    loading: true,
    data: {},
  }
}

export const HOME_DONE = 'home/init/done'
export const homeInitDone = data => ({
  type: HOME_DONE,
  loading: false,
  ...data,
})

export const HOME_CANCEL = 'home/init/cancel'
export const homeInitCancel = () => ({
  type: HOME_CANCEL,
  loading: false,
})
