export function executeTestFilterStream(): void {
    const pattern = '/aaa/i'
    const regex = new RegExp(pattern)
    const inputStream = ['aaa', 'aAa', 'aab']

    filterStream(inputStream, regex)
}

function filterStream(inputStream: string[], regexp: RegExp): void {
    const outputStream: string[] = []
    inputStream.forEach(s => {
        console.log(regexp.exec(s))
    })
    console.log(outputStream)
}
