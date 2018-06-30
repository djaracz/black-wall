import { AnyAction } from 'redux';
import { createSelector } from 'reselect';

import { Async } from '../../Utils/Async';
import { AsyncData } from '../model';
import { AsyncReducer, RootState } from '../reducer';

export namespace AsyncSelector {
  export const selectDomain = (state: RootState): AsyncReducer.State => state.async;

  export const select = (domain: AsyncReducer.State): AsyncReducer.State => domain;

  export type SelectType = AsyncData.Type | undefined;
  export const selectType = (type: string) =>
    createSelector(select, (async: AsyncReducer.State): SelectType => async.get(type));

  export type SelectTypeExists = boolean;
  export const selectTypeExists = (type: string) =>
    createSelector(
      selectType(type),
      (asyncForType: SelectType): SelectTypeExists => !!asyncForType,
    );

  export const selectStatus = (status: Async.Status): Async.Status => {
    switch (status) {
      case Async.Status.REQUESTED:
        return Async.Status.PENDING;
      default:
        return Async.Status[status];
    }
  };

  export const isActionAsync = (action: AnyAction): boolean => action.meta && action.meta.async;

  export const isRejected = (action: AnyAction): boolean =>
    action.meta && action.meta.status === Async.Status.REJECTED;
}
