import './Checkbox.css';
import { ReactComponent as CheckIcon } from '../assets/images/icon-check.svg'

export const Checkbox = ({
    checked = false,
    handleChange = () => console.warn('Missing handleChange prop')
}) => {
    const CheckboxStyle = 'Checkbox '.concat(checked ? 'checked' : '')

    return (
        <label className='CheckboxContainer'>
            <input
                type='checkbox'
                checked={checked}
                onChange={handleChange}
            />
            <div className='CheckboxOutline'>
                <span className={CheckboxStyle}>
                    {checked && <CheckIcon className='check-icon' />}
                </span>
            </div>
        </label>
    )
}
