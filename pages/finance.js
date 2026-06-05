const products = JSON.parse(
    localStorage.getItem(
        "meticProducts"
    )
) || [];

let revenue = 0;
let expenses = 0;

products.forEach(product => {

    revenue += parseFloat(
        product.price.replace(
            "£",
            ""
        )
    );

    expenses += parseFloat(
        product.cost.replace(
            "£",
            ""
        )
    );

});

const profit =
revenue - expenses;

document.getElementById(
    "revenue"
).textContent =
`£${revenue}`;

document.getElementById(
    "expenses"
).textContent =
`£${expenses}`;

document.getElementById(
    "profit"
).textContent =
`£${profit}`;

const savedTheme =
localStorage.getItem(
    "theme"
);

if(savedTheme){

    document.body.classList.add(
        savedTheme
    );

}

function calculatePricing(){

    const cost = parseFloat(
        document.getElementById(
            "costInput"
        ).value
    ) || 0;

    const qty = parseFloat(
        document.getElementById(
            "quantityInput"
        ).value
    ) || 0;

    const margin = parseFloat(
        document.getElementById(
            "marginInput"
        ).value
    ) || 0;

    const shipping = parseFloat(
        document.getElementById(
            "shippingInput"
        ).value
    ) || 0;

    const sellingPrice =

    cost * (1 + margin / 100);

    const totalCost =

    (cost * qty) +
    shipping;

    const revenue =

    sellingPrice * qty;

    const profit =

    revenue -
    totalCost;

    const breakEven =

    Math.ceil(
        totalCost /
        sellingPrice
    );

    document.getElementById(
        "pricingResults"
    ).innerHTML = `

        <p>
            Suggested Price:
            £${sellingPrice.toFixed(2)}
        </p>

        <p>
            Total Cost:
            £${totalCost.toFixed(2)}
        </p>

        <p>
            Revenue:
            £${revenue.toFixed(2)}
        </p>

        <p>
            Profit:
            £${profit.toFixed(2)}
        </p>

        <p>
            Break-even Sales:
            ${breakEven}
        </p>

    `;

}