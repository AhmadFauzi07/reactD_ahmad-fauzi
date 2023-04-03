// class user{
//     var id;
//     var username;
//     var password;
// }
// class userservice{
//     user[] users = [];

//     user[] getallusers(){
//         return user;
//     }
//     user getuserbyid(userid){
//         return this.users.filter(userid);
//     }
// }

// ada banyak kekurangan dalam penulisan kode diatas
// kekurangan tersebut ada di bagian isi dalam class
// didalam javascript class harus ada constructor dan method jadi penulisan kode diatas salah

class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
  userservice() {
    return `Saya memiliki akun dengan username ${this.username} dan password ${this.password} dan memiliki id ${this.id}; `;
  }
}
const users = new User(04, "dandi", "045432134");
console.log(users.userservice());
