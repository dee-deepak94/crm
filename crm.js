let customers = []
function handleAdd() {
    const id = document.getElementById('id').value
    const name = document.getElementById('Name').value
    const email = document.getElementById('email').value
    const address = document.getElementById('address').value
    const phone = document.getElementById('phone').value
    const newCustomer = {
        id: id,
        name: name,
        email: email,
        address: address,
        phone: phone
    }

    customers.push(newCustomer)
    console.log(customers)

    const customerListDiv = document.getElementById('customer-list')
 

    const customerTr = document.createElement('tr')
    customerTr.className = 'customer-tr'

    const idTd = document.createElement('td')
    idTd.innerText = newCustomer.id
    idTd.className = 'coustomer-items'

    const nameTd = document.createElement('td')
    nameTd.innerText = newCustomer.name
    nameTd.className = 'coustomer-items'

    const emailTd = document.createElement('td')
    emailTd.innerText = newCustomer.email
    emailTd.className = 'coustomer-items'

    const addressTd = document.createElement('td')
    addressTd.innerText = newCustomer.address
    addressTd.className = 'coustomer-items'

    const phoneTd = document.createElement('td')
    phoneTd.innerText = newCustomer.phone
    phoneTd.className = 'coustomer-items'

    customerTr.appendChild(idTd)
    customerTr.appendChild(nameTd)
    customerTr.appendChild(emailTd)
    customerTr.appendChild(addressTd)
    customerTr.appendChild(phoneTd)

    customerListDiv.appendChild(customerTr)


}