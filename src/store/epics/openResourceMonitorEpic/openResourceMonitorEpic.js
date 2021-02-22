import { ofType } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';
import { OPEN_RESOURCE_MONITOR } from '../../actions';
import { ElectronController } from '../../../controllers';

const openResourceMonitorEpic = (action$, _, { controller = new ElectronController() }) =>
  action$.pipe(
    ofType(OPEN_RESOURCE_MONITOR),
    tap(() => {
      controller.openResourceMonitor();
    }),
    ignoreElements()
  );

export default openResourceMonitorEpic;
