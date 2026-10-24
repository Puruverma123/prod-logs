import chalk from "chalk"
const log = console.log

type ActionType = "SUCCESS" | "WARNING" | "ERROR" | "INFO"

const colors = {
    SUCCESS: chalk.greenBright.bold,
    ERROR: chalk.redBright.bold,
    INFO: chalk.cyanBright.bold,
    WARNING: chalk.yellowBright.bold
}

const MAX_WIDTH = 80

const wrapText = (text: string, prefixLength: number): string[] => {
    const availableWidth = MAX_WIDTH - prefixLength
    const words = text.split(' ')
    const lines: string[] = []
    let currentLine = ''

    for (const word of words) {
        if ((currentLine + word).length <= availableWidth) {
            currentLine += word + ' '
        } else {
            lines.push(currentLine.trim())
            currentLine = word + ' '
        }
    }

    if (currentLine) lines.push(currentLine.trim())

    return lines
}

const handler = (msg: string, action: ActionType) => {
    const color = colors[action]
    const dash = '-'.repeat(MAX_WIDTH)
    const prefix = `${action} - `
    const msgLines = wrapText(msg, prefix.length)

    log('\n' + color(dash))
    msgLines.forEach((line, index) => {
        const prefixText = index === 0 ? color(prefix) : ' '.repeat(prefix.length)
        const messagePart = line
        const coloredMessage = chalk.white.dim(messagePart)
        const fullLine = prefixText + coloredMessage
        const paddedLine = fullLine.padEnd(MAX_WIDTH, ' ')
        log(paddedLine)
    })
    log(color(dash))
}
export const successLog = (msg: string = "Operation completed successfully") => {
    handler(msg, "SUCCESS")
}

export const errorLog = (msg: string = "Something went wrong during execution") => {
    handler(msg, "ERROR")
}

export const warningLog = (msg: string = "Potential issue identified") => {
    handler(msg, "WARNING")
}

export const infoLog = (msg: string = "Just a heads up") => {
    handler(msg, "INFO")
}
