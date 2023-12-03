export class Poker {
    deck: string[]
    constructor(initialDeck: string[]) {
        this.deck = initialDeck
    }

    getDeck(): string[] {
        return this.deck
    }

    shuffleMyCards(): void {
        const shuffled: string[] = []

        for (let i = 0; i < this.deck.length; i++) {
            if (i === 0) {
                shuffled.push(this.deck[i])
            } else {
                if ((i + 1) % 2 === 0) {
                    shuffled.push(this.deck[i])
                } else {
                    shuffled.unshift(this.deck[i])
                }
            }
        }
        this.deck = shuffled
    }
}

export function shuffleCards(cards: string[]): string[] {
    const shuffled: string[] = []

    for (let i = 0; i < cards.length; i++) {
        if (i === 0) {
            shuffled.push(cards[i])
        } else {
            if ((i + 1) % 2 === 0) {
                shuffled.push(cards[i])
            } else {
                shuffled.unshift(cards[i])
            }
        }
    }
    return shuffled
}
