import { UseFormRegister, FieldError } from "react-hook-form";

interface Props {
    register: UseFormRegister<any>;
    name: string;
    isRequired: boolean;
    labelFlex: string;
    required?: string;
    className: string;
    validation?: { [key: string]: any };
    errors: { [key: string]: any };
    placeholder?: string;
}

export const TextareaInput: React.FC<Props> = ({
    register,
    name,
    isRequired,
    required,
    labelFlex,
    className,
    validation = {},
    errors,
    placeholder = "",
}) => {
    return (
        <>
            {/* <label htmlFor={name} className={`${required} form-label fw-bold mb-2`}><strong>{label}</strong></label> */}

            {labelFlex && (
                <label  htmlFor={name} className="form-label fw-bolder text-dark mb-2">
                    <span className={required}>{labelFlex}</span>
                    {isRequired && (<span className="text-danger">*</span>)}
                </label>
            )}
            <textarea
                className={`${className} ${errors?.name ? "is-invalid" : ""
                    }`}
                {...register(name, validation)}
                id={name}
                placeholder={placeholder}
                aria-invalid={errors?.name ? "true" : "false"}
            />
            {errors?.name && (
                <strong className='fv-plugins-message-container text-danger'>
                    <div className='fv-help-block'>
                        <span role='alert'>{errors?.name.message}</span>
                    </div>
                </strong>
            )}
        </>
    );
};