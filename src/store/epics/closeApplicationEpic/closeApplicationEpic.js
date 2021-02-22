import { combineEpics, ofType } from 'redux-observable';
import { ignoreElements, mapTo, tap } from 'rxjs/operators';

import { ElectronController } from '../../../controllers';
import { CLOSE_APPLICATION } from '../../actions';

const showCloseApplicationModalEpic = action$ =>
  action$.pipe(
    ofType(CLOSE_APPLICATION),
    mapTo(() => console.log(`YOU NEED TO OPEN MODAL HERE`))
  );

const closeApplicationEpic = (action$, _, { controller = new ElectronController() }) =>
  action$.pipe(
    ofType(CLOSE_APPLICATION),
    tap(() => {
      controller.closeApplication();
    }),
    ignoreElements()
  );

export default combineEpics(showCloseApplicationModalEpic, closeApplicationEpic);
