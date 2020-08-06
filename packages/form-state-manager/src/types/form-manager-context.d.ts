import { FormEvent } from 'react';
import AnyObject from './any-object';

export interface Action extends AnyObject {
  type: string;
}

export interface ManagerContextValue {
  values: AnyObject;
  dispatch: (action: Action) => void;
  handleSubmit: (event: FormEvent) => void;
  registerField: (dispatch: (action: Action) => void, fieldState: AnyObject) => void;
  unRegisterField: (dispatch: (action: Action) => void, fieldState: AnyObject) => void;
}

export interface ManagerContext {
  value: ManagerContextValue;
}

export default ManagerContext;
