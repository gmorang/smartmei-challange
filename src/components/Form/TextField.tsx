import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { TextField } from '@material-ui/core';

interface Props {
  name: string;
  placeholder?: string;
  type?: string;
}

const FormTextField: React.FC<Props> = ({ name, placeholder, type }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <TextField inputRef={inputRef} defaultValue={defaultValue} placeholder={placeholder} type={type} />;
}

export default FormTextField;
