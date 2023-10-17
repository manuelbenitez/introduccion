class Smartphone {
  constructor(brand, name, initialPrice) {
    this.brand = brand;
    this.name = name;

    // Propiedad privada price
    let price = initialPrice;

    // Método para obtener el precio
    this.getPrice = () => {
      return price;
    };

    // Método para actualizar el precio (opcional)
    // this.setPrice = (newPrice) => {
    //   price = newPrice;
    // };
  }
}

const smarthphone = new Smartphone("Iphone", "S10", 100);

console.log(smarthphone.brand);
console.log(smarthphone.name);
console.log(smarthphone.getPrice());
