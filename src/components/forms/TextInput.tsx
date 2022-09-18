import { UseFormRegister, FieldError } from "react-hook-form";
import { InputType, InputInputMode } from './index';

interface Props {
    register: UseFormRegister<any>;
    name: string;
    isRequired: boolean;
    label?: string;
    labelFlex?: string;
    type: InputType;
    min?: string,
    step?: string;
    isNumber?: boolean;
    inputMode?: InputInputMode,
    pattern?: any,
    required?: string;
    value?: string;
    className: string;
    validation?: { [key: string]: any };
    errors: { [key: string]: any };
    placeholder?: string;
    autoComplete?: string;
}

export const TextInput: React.FC<Props> = ({
    register,
    name,
    label,
    labelFlex,
    isRequired,
    isNumber,
    inputMode,
    min,
    step,
    pattern,
    required,
    type,
    value,
    className,
    validation = {},
    errors,
    placeholder = "",
    autoComplete,
}) => {
    return (
        <>
            {labelFlex && (
                <label  htmlFor={name} className="form-label fw-bolder text-dark mb-2">
                    <span className={required}>{labelFlex}</span>
                    {isRequired && (<span className="text-danger">*</span>)}
                </label>
            )}
            <input
                className={`${className} ${errors?.name ? "is-invalid" : ""}`}
                {...register(name, { valueAsNumber: isNumber })}
                id={name}
                type={type}
                value={value}
                pattern={pattern}
                min={min}
                step={step}
                inputMode={inputMode}
                placeholder={placeholder}
                autoComplete={autoComplete}
                aria-invalid={errors?.name ? "true" : "false"}
                required={isRequired}
            />

            {errors?.name && (
                <strong className='fv-plugins-message-container text-danger'>
                    <div className='fv-help-block'>
                        <small role='alert'>{errors?.name.message}</small>
                    </div>
                </strong>
            )}
        </>
    );
};