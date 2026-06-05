let suppliers = JSON.parse(
    localStorage.getItem(
        "meticSuppliers"
    )
) || [

{
    name:"Tapstitch",
    moq:"10",
    leadTime:"7 Days",
    rating:"⭐⭐⭐⭐⭐"
},

{
    name:"Printify",
    moq:"1",
    leadTime:"3 Days",
    rating:"⭐⭐⭐⭐"
}

];

const grid =
document.getElementById(
    "supplierGrid"
);

function renderSuppliers(){

    grid.innerHTML = "";

    suppliers.forEach(
        (supplier,index) => {

            const card =
            document.createElement(
                "div"
            );

            card.classList.add(
                "product-card"
            );

            card.innerHTML = `

                <h2>
                    ${supplier.name}
                </h2>

                <p>
                    MOQ:
                    ${supplier.moq}
                </p>

                <p>
                    Lead Time:
                    ${supplier.leadTime}
                </p>

                <p>
                    Rating:
                    ${supplier.rating}
                </p>

                <button
                    class="delete-btn"
                    onclick="deleteSupplier(${index})">

                    Delete

                </button>

            `;

            grid.appendChild(
                card
            );

        }
    );

}

renderSuppliers();

function deleteSupplier(index){

    suppliers.splice(
        index,
        1
    );

    localStorage.setItem(

        "meticSuppliers",

        JSON.stringify(
            suppliers
        )

    );

    renderSuppliers();

}

const addBtn =
document.getElementById(
    "addSupplierBtn"
);

const modal =
document.getElementById(
    "supplierModal"
);

addBtn.addEventListener(
    "click",
    () => {

        modal.style.display =
        "flex";

    }
);

function addSupplier(){

    const name =
    document.getElementById(
        "supplierName"
    ).value;

    const moq =
    document.getElementById(
        "supplierMOQ"
    ).value;

    const leadTime =
    document.getElementById(
        "supplierLeadTime"
    ).value;

    const rating =
    document.getElementById(
        "supplierRating"
    ).value;

    suppliers.push({

        name,
        moq,
        leadTime,
        rating

    });

    localStorage.setItem(

        "meticSuppliers",

        JSON.stringify(
            suppliers
        )

    );

    modal.style.display =
    "none";

    renderSuppliers();

}

const savedTheme =
localStorage.getItem(
    "theme"
);

if(savedTheme){

    document.body.classList.add(
        savedTheme
    );

}