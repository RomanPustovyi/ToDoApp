import './Checkbox.css';
import { ReactComponent as CheckIcon } from '../assets/images/icon-check.svg'

export const Checkbox = ({ checked = false }) => {

    const handleCheckboxChange = () => console.warn('Not implemented!')

    const CheckboxStyle = 'Checkbox '.concat(checked ? 'checked' : '')

    return (
        <label className='CheckboxContainer'>
            <input
                type='checkbox'
                checked={checked}
                onChange={handleCheckboxChange}
            />
            <span className={CheckboxStyle}>
                {checked && <CheckIcon className='check-icon' />}
            </span>
        </label>
    )
}
