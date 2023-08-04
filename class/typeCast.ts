class Kendaraan {
}
class Motor extends Kendaraan {
}
class Mobil extends Motor {}

const jamur:Mobil = new Mobil()

function checkingClass(params: Kendaraan): void {
    if (params instanceof Mobil) {
        console.log("bagian dari Mobil")
    } else if (params instanceof Motor) {
        console.log("bagian dari Motor")
    } else {
        console.log("berarti anda adalah origin kendaraan")
    }
}

const jamurBasah: Mobil = new Mobil();

checkingClass(jamurBasah)