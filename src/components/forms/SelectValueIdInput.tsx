import { UseFormRegister, FieldError } from "react-hook-form";

interface Props {
    register: UseFormRegister<any>;
    name: string;
    dataItem: any;
    isRequired: boolean;
    label?: string;
    isValueInt: boolean;
    labelFlex?: string;
    required?: string;
    className: string;
    validation?: { [key: string]: any };
    errors: { [key: string]: any };
}

export const SelectValueIdInput: React.FC<Props> = ({
    register,
    name,
    label,
    dataItem,
    labelFlex,
    isRequired,
    isValueInt,
    required,
    className,
    validation = {},
    errors,
}) => {
    return (
        <>
            {labelFlex && (
                <label className="form-label fw-bolder text-dark mb-2">
                    <span className={required}>{labelFlex}</span>
                    {isRequired && (<span className="text-danger">*</span>)}
                </label>
            )}
            {label && (<label htmlFor={name} className={`${required} form-label`}>{label}</label>)}
            <select className={`${className} ${errors?.[name] ? "is-invalid" : ""
                }`} {...register(name, validation)} required={isRequired}>
                <option value="">Choose value</option>
                {dataItem?.map((item: any, index: number) => (
                    <option value={isValueInt ? item?.id : item?.code} key={index}>{(item?.name)}</option>
                ))}
            </select>
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