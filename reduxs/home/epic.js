import { switchMap, map, catchError } from 'rxjs/operators'
import { from, of } from 'rxjs'
import axios from 'axios'
import { ofType } from 'redux-observable'
import { HOME, homeInitCancel, homeInitDone } from './action'

export const homeInitEpic = (action$, state$, { API_URL }) =>
  action$.pipe(
    //
    ofType(HOME),
    //
    switchMap(() => {
      return (
        from(axios.get(`${API_URL}/script`))
          //
          .pipe(
            switchMap(({ data }) => {
              return of(homeInitDone(data))
            }),
          )
      )
    }),
  )

export const ignoreEpic = () => {}
