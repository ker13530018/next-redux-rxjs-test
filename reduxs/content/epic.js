import { switchMap, catchError } from 'rxjs/operators'
import { from, of } from 'rxjs'
import axios from 'axios'
import { ofType } from 'redux-observable'
import { CONTENT_GET, CONTENT_GET_DONE, contentGetDone } from './action'

export const contentGetEpic = (action$, state$, { API_URL }) =>
  action$.pipe(
    //
    ofType(CONTENT_GET),
    //
    switchMap(() => {
      return (
        from(axios.get(`${API_URL}/contents/${''}`))
          //
          .pipe(
            switchMap(({ data }) => {
              return of(contentGetDone(data))
            }),
          )
      )
    }),
  )

export const ignoreEpic = () => {}
