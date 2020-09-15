function Voorraad(item, aantal) {
    let artikel = item;
    let voorraad = aantal;

    this.getVoorraad = function () {
        return voorraad;
    }
    this.getArtikel = function () {
        return artikel;
    }
    this.showVoorraad = function () {
        console.log('De voorraad van : ' + artikel + ' is ' + voorraad);
    }
    this.verlaagVoorraad = function () {
        voorraad = voorraad  -1;
    }
    // Voor opdracht 5
    this.verlaagVoorraadMetMinderStuks = function () {
        voorraad = voorraad -aantal;
    }
     // Voor opdracht 3
    this.verhoogVoorraad = function () {
        voorraad = voorraad +1;
    }
    // Voor opdracht 4
    this.verhoogVoorraadMetMeerStuks = function (){
        voorraad = voorraad +aantal;
    }
}

function Auto(merk, bouwjaar) {

    let brand = merk;
    let year = bouwjaar;

    this.getBrand = function () {
        return brand;
    }

    this.getYear = function () {
        return year;
    }

    this.showDetails = function () {
        console.log('Automerk: ' + brand + ' bouwjaar: ' + bouwjaar);
    }

}