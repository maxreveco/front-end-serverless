const stringToHtml = (string) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(string, 'text/html')
    return doc.body.firstChild
}

const renderItem = (item) => {
    const element = stringToHtml(`<li data-id="${item._id}">${item.name}</li>`)
    return element
}

window.onload = () => {
    fetch('https://serverless-maxreveco.vercel.app/api/meals/'//,
        // {
        //     method: 'GET',
        //     mode: 'cors',
        //     cache: 'no-cache',
        //     credentials: 'same-origin',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     redirect: 'follow',
        //     body: JSON.stringify({ user: 'lala', password: 'chanchito' })
        // }
    )
        .then(response => response.json())
        .then(data => {
            const mealsList = document.getElementById('meals-list')
            const submit = document.getElementById('submit')
            const listItems = data.map(renderItem)
            mealsList.removeChild(mealsList.firstElementChild)
            listItems.forEach(element => mealsList.appendChild(element))
            submit.removeAttribute('disabled')
        })
}