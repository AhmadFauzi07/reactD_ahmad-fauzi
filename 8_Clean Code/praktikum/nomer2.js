class kendaraan {
  constructor(totalroda, kecepatanperjam) {
    this.totalroda = totalroda;
    this.kecepatanperjam = kecepatanperjam;
  }
  berjalan() {
    return (this.totalroda = 0), (this.kecepatanperjam = 0);
  }
}

class mobil extends kendaraan {
  constructor(totalroda, kecepatanperjam, tambahkecepatan) {
    super(totalroda, kecepatanperjam);
    this.mobil = tambahkecepatan = 10;
  }
  berjalan() {
    return (this.totalroda = 0), (this.kecepatanperjam = 0), (this.tambahkecepatan = 10);
  }
}

let mobilcepat = new mobil();
console.log(mobilcepat.berjalan());

let mobillamban = new kendaraan();
console.log(mobillamban.berjalan());
