const typesNotWorking = (foo: string) => foo

document.querySelector('#app').append('Funguje funguje! ' + typesNotWorking('tada'))
