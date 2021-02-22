import { ofType } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';
import { ElectronController } from '../../../controllers';
import { RESTART_APPLICATION } from '../../actions';

const restartApplicationEpic = (action$, _, { controller = new ElectronController() }) =>
  action$.pipe(
    ofType(RESTART_APPLICATION),
    tap(() => {
      controller.restartApplication();
    }),
    ignoreElements()
  );

export default restartApplicationEpic;
