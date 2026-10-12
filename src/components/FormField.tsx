import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface BaseFieldProps {
  id: string
  label: string
  error?: string
  hint?: string
  required?: boolean
}

type InputFieldProps = BaseFieldProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'required'> & { as?: 'input' }

type SelectFieldProps = BaseFieldProps &
  Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'required'> & {
    as: 'select'
    options: { value: string; label: string }[]
    placeholder?: string
  }

type TextareaFieldProps = BaseFieldProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id' | 'required'> & { as: 'textarea' }

export type FormFieldProps = InputFieldProps | SelectFieldProps | TextareaFieldProps

/**
 * Accessible labelled field with optional hint and inline error message.
 * Wires up aria-describedby / aria-invalid automatically.
 */
export default function FormField(props: FormFieldProps) {
  const { id, label, error, hint, required } = props
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  const shared = {
    id,
    className: 'form-field__input',
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    'aria-required': required || undefined,
  }

  let control: React.ReactNode

  if (props.as === 'select') {
    const { as: _as, label: _l, error: _e, hint: _h, required: _r, options, placeholder, ...rest } = props
    control = (
      <select {...shared} {...rest}>
        {placeholder !== undefined && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    )
  } else if (props.as === 'textarea') {
    const { as: _as, label: _l, error: _e, hint: _h, required: _r, ...rest } = props
    control = <textarea {...shared} {...rest} />
  } else {
    const { as: _as, label: _l, error: _e, hint: _h, required: _r, ...rest } = props
    control = <input {...shared} {...rest} />
  }

  return (
    <div className="form-field">
      <label htmlFor={id} className="form-field__label">
        {label}
        {required && (
          <span className="form-field__required" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {hint && (
        <span id={hintId} className="form-field__hint">
          {hint}
        </span>
      )}
      {control}
      {error && (
        <span id={errorId} className="form-field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  )
}
