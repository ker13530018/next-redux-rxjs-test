import { switchMap, map, catchError } from 'rxjs/operators'
import { from, of } from 'rxjs'
import axios from 'axios'
import { ofType } from 'redux-observable'
import { TEST, testInitCancel, testInitDone } from './action'

export const testInitEpic = (action$, state$) =>
  action$.pipe(
    //
    ofType(TEST),
    //
    switchMap(() => {
      return (
        from(axios.get('http://localhost:3000/api/script'))
          //
          .pipe(
            switchMap(({ data }) => {
              return of(testInitDone(data))
            }),
          )
      )
    }),
  )

export const ignoreEpic = () => {}
