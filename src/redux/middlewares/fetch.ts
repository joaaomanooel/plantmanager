import { actions } from '../fetch';

export default (store: { dispatch: (arg0: any) => void }) =>
  (next: (arg0: { type: string }) => any) =>
  (action: { type: string }) => {
    const result = next(action);
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE|NETWORK_ERROR)/.exec(action.type);

    // if type has a *_REQUEST / *_SUCCESS / *_FAILURE actions
    if (matches) {
      const [, requestName, requestState] = matches;
      store.dispatch(actions.fetchRequest({ requestName, requestState }));
    }

    return result;
  };
