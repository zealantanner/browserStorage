const header = document.querySelector('#arrOfBids');
const bidder1 = document.querySelector('#bidder1');
const bidder2 = document.querySelector('#bidder2');


const bidsKey = 'bids'

let bids = retrieveBids() || [
    {
        amount: 45,
        user: 'bidder1',
    },
];
display()

function display() {
    let bidsHtml = '';
    for(let i = 0;i < bids.length; i++) {
        bidsHtml += `
            <div>
                <span>${bids[i].user}</span>
                <span>${bids[i].amount}</span>
            </div>
        `;
    };
    header.innerHTML = bidsHtml;
}

function placeBid(user) {
    let bid = {
        amount: document.querySelector(`#${user}`).value,
        user,
    }
    bids.push(bid);
    document.querySelector(`#${user}`).value = '';
    display()
    saveBids()
    console.log(bids)
}

function saveBids() {
    localStorage.setItem(bidsKey, JSON.stringify(bids));
}

function retrieveBids() {
    return JSON.parse(localStorage.getItem(bidsKey));
}
function clearBids() {
    localStorage.clear(bidsKey)
    bids = []
    display()
}