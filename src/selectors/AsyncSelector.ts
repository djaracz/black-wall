import { Async } from '../utils/Async';
import { createSelector } from 'reselect';

export namespace AsyncSelector {
  export const selectTypesForType = (type: string): Async.CreateTypes => Async.createTypes(type);

  export const isRequested = (type: string) => createSelector(
    selectTypesForType,
    (types: Async.CreateTypes): boolean => types.get('REQUESTED') === type
  );

  export const isPending = (type: string) => createSelector(
    selectTypesForType,
    (types: Async.CreateTypes): boolean => types.get('PENDING') === type
  );

  export const isResolved = (type: string) => createSelector(
    selectTypesForType,
    (types: Async.CreateTypes): boolean => types.get('RESOLVED') === type
  );

  export const isRejected = (type: string) => createSelector(
    selectTypesForType,
    (types: Async.CreateTypes): boolean => types.get('REJECTED') === type
  );

  export const selectRequested = createSelector(
    selectTypesForType,
    (types: Async.CreateTypes): string => types.get('REQUESTED')
  );

  export const selectPending = createSelector(
    selectTypesForType,
    (types: Async.CreateTypes): string => types.get('PENDING')
  );

  export const selectResolved = createSelector(
    selectTypesForType,
    (types: Async.CreateTypes): string => types.get('RESOLVED')
  );

  export const selectRejected = createSelector(
    selectTypesForType,
    (types: Async.CreateTypes): string => types.get('REJECTED')
  );

  export const selectTypeForStatus = (status: Async.Status) => createSelector(
    selectTypesForType,
    (types: Async.CreateTypes): string => types.get(status)
  );

  export const selectStatus = (status: Async.Status): Async.Status => {
    switch (status) {
      case Async.Status.REQUESTED:
        return Async.Status.PENDING;
      default:
        return Async.Status[status];
    }
  }
}