function ticketPrice(ticketQuantity) {
    let first100TicketRate = 100;
    let second100TicketRate = 90;
    let restTicket = 70;
    if (ticketQuantity <= 100) {
        let first100Ticket = first100TicketRate * 100;
        return first100Ticket;
    }
    else if (ticketQuantity) {
        let first100TicketPrice = first100TicketRate * 100;
        let second100Ticket = ticketQuantity - 100;
        let second100TicketPrice = second100Ticket * second100TicketRate;
        let second100TicketTotalPrice = first100TicketPrice + second100TicketPrice;
        return second100TicketTotalPrice;

    }

    else{
        let first100TicketPrice = 100 * first100TicketRate;
        let second100TicketPrice = 100 * second100TicketRate;
        let restTicketRate = ticketQuantity - 200;
        let restTicketPrice = restTicket * restTicket;
        let restTicketTotalPrice = first100TicketPrice + second100TicketPrice + restTicketPrice;

        return restTicketTotalPrice;
    }
}

let myTicketQuantity = 201;
let myTicketPrice = ticketPrice(myTicketQuantity)
console.log(myTicketPrice);