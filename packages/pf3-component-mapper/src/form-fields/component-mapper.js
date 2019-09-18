import React from 'react';
import { componentTypes } from '@data-driven-forms/react-form-renderer';
import {
  TextField,
  TextareaField,
  SelectField,
  CheckboxGroup,
  Radio,
  SwitchField,
  DatePickerField,
} from './form-fields';
import SubForm from './sub-form';
import Tabs from './tabs';
import Wizard from './wizzard/wizzard';
import Select from './select';
import PlainTextField from './plain-text';
import Button from './button';
import {
  InputAddonButtonGroup,
  InputAddonGroup,
} from './input-group-fields';

const mapper = {
  [componentTypes.BUTTON]: Button,
  [componentTypes.TEXT_FIELD]: TextField,
  [componentTypes.TEXTAREA_FIELD]: TextareaField,
  [componentTypes.SELECT_COMPONENT]: SelectField,
  [componentTypes.CHECKBOX]: CheckboxGroup,
  [componentTypes.SUB_FORM]: SubForm,
  [componentTypes.RADIO]: Radio,
  [componentTypes.TABS]: Tabs,
  [componentTypes.DATE_PICKER]: DatePickerField,
  [componentTypes.TIME_PICKER]: props => <div>time picker</div>,
  [componentTypes.SWITCH]: SwitchField,
  [componentTypes.WIZARD]: Wizard,
  [componentTypes.PLAIN_TEXT]: PlainTextField,
  [componentTypes.INPUT_ADDON_BUTTON_GROUP]: InputAddonButtonGroup,
  [componentTypes.INPUT_ADDON_GROUP]: InputAddonGroup,
};

export default mapper;

export const components = {
  TextField,
  TextareaField,
  SelectField,
  CheckboxGroup,
  SubForm,
  Radio,
  Tabs,
  DatePickerField,
  SwitchField,
  Wizard,
  PlainTextField,
};

export const rawComponents = {
  Select,
};
