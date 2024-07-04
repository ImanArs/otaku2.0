import classNames from "classnames";
import React from "react";
import cls from "./styles.module.scss";

interface CheckboxProps {
  label?: string | React.ReactNode;
  checked?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  className,
  ...rest
}) => {
  return (
    <label className={classNames("", {}, [cls.checkbox, className])}>
      <input 
        type="checkbox" 
        checked={checked} 
        {...rest}
        />
      <span className={cls.checkmark}>{label}</span>
    </label>
  );
};

export default Checkbox;
