import { useState } from 'react';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContactFormRequest } from '../../pages/contact-us/core/index';
import { createOneContactUs, getCountries } from '../../pages/contact-us/api/index';
import { TextInput } from '../forms/TextInput';
import { useQuery } from '@tanstack/react-query';
import { SelectValueIdInput } from '../forms/SelectValueIdInput';
import { TextareaInput } from '../forms/TextareaInput';

const schema = yup
  .object({
    fullName: yup.string().min(3, 'Minimum 3 symbols').max(200, 'Maximum 3 symbols').required(),
    description: yup.string().min(3, 'Minimum 3 symbols').max(200, 'Maximum 3 symbols').required(),
    phone: yup.string().min(3, 'Minimum 3 symbols').required(),
    email: yup.string()
      .email('Wrong email format')
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Email is required'),
    countryId: yup.number().required(),
  })
  .required();


const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | string | undefined>(undefined)
  const { control, register, reset, handleSubmit, watch, setValue,
    formState: { errors, isDirty, isValid }
  } = useForm<ContactFormRequest>({ resolver: yupResolver(schema), mode: "onChange" });


  const {
    data: dataCountries,
  } = useQuery(['countries'], () => getCountries())
  const countries = dataCountries?.data

  const onSubmit = async (data: ContactFormRequest) => {
    setLoading(true);
    setHasErrors(undefined)
    const payload = { ...data }
    setTimeout(async () => {
      await createOneContactUs(payload)
        .then(() => {
          setHasErrors(false);
          setLoading(false)
          reset()

        })
        .catch((error) => {
          setHasErrors(true)
          setLoading(false)
          setHasErrors(error.response.data.message);
        });
    }, 1000)

  };

  return (
    <section
      className="contact-us-form pt-60 pb-120"
      style={{
        background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="section-heading">
              <h2>Talk to Our Sales & Marketing Department Team</h2>
              <p>
                Collaboratively promote client-focused convergence vis-a-vis
                customer directed alignments via standardized infrastructures.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="register-form">

              {hasErrors && (
                <div className='mb-lg-15 alert alert-danger'>
                  <div className='alert-text font-weight-bold'>
                    {hasErrors}
                  </div>
                </div>
              )}

              <div className="row">
                <div className='fv-row mb-1'>
                  <TextInput
                    className="form-control form-control-lg"
                    labelFlex="Full Name"
                    register={register}
                    errors={errors}
                    name="fullName"
                    type="text"
                    autoComplete="one"
                    placeholder="Enter full name"
                    validation={{ required: true }}
                    required="required"
                    isRequired={true}
                  />
                </div>
                <div className="col-sm-6">
                  <TextInput
                    className="form-control form-control-lg"
                    labelFlex="Phone"
                    register={register}
                    errors={errors}
                    name="phone"
                    type="text"
                    autoComplete="one"
                    placeholder="Phone"
                    validation={{ required: true }}
                    required="required"
                    isRequired={true}
                  />
                </div>
                <div className="col-sm-6">
                  <TextInput
                    className="form-control form-control-lg"
                    labelFlex="Email"
                    register={register}
                    errors={errors}
                    name="email"
                    type="email"
                    autoComplete="one"
                    placeholder="Enter email address"
                    validation={{ required: true }}
                    required="required"
                    isRequired={true}
                  />
                </div>
                <div className="col-12">
                  <SelectValueIdInput
                    dataItem={countries}
                    isValueInt={true}
                    className="form-control form-select select2-hidden-accessible"
                    labelFlex="Country"
                    register={register}
                    errors={errors}
                    name="countryId"
                    validation={{ required: true }}
                    isRequired={true}
                    required="required"
                  />
                </div>
                <div className="col-12">
                  <TextareaInput
                    labelFlex="Message"
                    className="form-control"
                    register={register}
                    errors={errors}
                    name="description"
                    placeholder="How can we help you?"
                    validation={{ required: true }}
                    isRequired={true}
                  />
                </div>
              </div>
              <div className='d-flex flex-wrap justify-content-center mt-4'>
                <button type='submit' className={`btn btn-primary`}
                disabled={loading}
                >
                  {!loading && <span className='indicator-label'>Get in Touch</span>}
                  {loading && (
                    <span className='indicator-progress' style={{ display: 'block' }}>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-5 col-md-10">
            <div className="contact-us-img">
              <Image
                width={526}
                height={406}
                src="/contact-us-img-2.svg"
                alt="contact us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
