
class Order {
    constructor(
        public adress: string,
        public number: number,
        public optionalAdress: string,
        public paymentOption: string,
        public orderItem: OrderItem[] = []
    ) { }
}

class OrderItem {
    constructor(public quantity: number, public menuItem: string) {
    }
}

export { Order, OrderItem }