type FormSubmitHandler = (data: FormData) => void
type MessageHandler = (data: MessageEvent) => void

// INFO: Function Overload (2 heads and 1 implementation)
function handleMainEvent(elem: HTMLFormElement, handler: FormSubmitHandler)
function handleMainEvent(elem: HTMLIFrameElement, handler: MessageHandler)
function handleMainEvent(
    elem: HTMLFormElement | HTMLIFrameElement,
    handler: FormSubmitHandler | MessageHandler
): void { }

const myFrame = document.getElementsByTagName('iframe')[0]
const myForm = document.getElementsByTagName('form')[0]

handleMainEvent(myFrame, val => { })
handleMainEvent(myForm, val => { })
