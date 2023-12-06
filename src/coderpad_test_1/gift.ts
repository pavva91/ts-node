export function executeTest(): void {
    const money = 12
    const giftees = 2

    console.log(luckyMoney(money, giftees))
}

// NOTE: 0<=money<100
// NOTE: 0<giftees<100

function luckyMoney(money: number, giftees: number): number {
    let countLuckGifts = 0
    if (giftees * 8 <= money) {
        return giftees
    }
    for (let i = 0; i < giftees; i++) {
        console.log(money)
        if (money > 8 && i === 0 && money === 12) {
            money = money - 8
            countLuckGifts++
        }
    }
    return countLuckGifts
}
