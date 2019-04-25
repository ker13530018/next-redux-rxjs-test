// create action
export const CONTENT_GET = 'content/get'
export const contentGet = () => {
  return {
    type: CONTENT_GET,
    loading: true,
    data: {},
  }
}

export const CONTENT_GET_DONE = 'content/get/done'
export const contentGetDone = data => ({
  type: CONTENT_GET_DONE,
  loading: false,
  ...data,
})

export const CONTENT_GET_CANCEL = 'content/get/cancel'
export const contentGetCancel = () => ({
  type: CONTENT_GET_CANCEL,
  loading: false,
})
