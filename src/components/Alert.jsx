
import { useCustomAlert } from "./Context/Context";

export const Alert = () => {
    const context = useCustomAlert()
    console.log(context);
    return (
        context.toggleValue && <div>Я здесь....</div>
    )
}