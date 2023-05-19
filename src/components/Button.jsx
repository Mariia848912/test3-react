import { useCustomAlert } from './Context/Context'

export const Button = () => {
     const context = useCustomAlert()
    return (
        <button type="button" onClick={() => context.toggle(!context.toggleValue)}>Click me</button>
    )
}