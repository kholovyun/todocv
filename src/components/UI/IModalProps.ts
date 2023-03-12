import { MouseEventHandler } from "react"

export default interface IModalProps {
    submitText: string
    cancelFunc: MouseEventHandler<HTMLButtonElement>
    submitFunc: MouseEventHandler<HTMLButtonElement>
    message: string
}