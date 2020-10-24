<template>
  <v-app id="oo">
    <v-form ref="form" v-model="valid" lazy-validation>
      <h1 class="text-center">
        ประเมินความพึงพอใจของลูกค้าหลังใช้บริการร้านกาเเฟ
      </h1>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="name" :counter="10" label="Name" required />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="Lastname"
              :counter="10"
              label="Lastname"
              required
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="Age" :counter="10" label="Age" required />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="Email"
              :counter="30"
              label="Email"
              required
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="Address"
              :counter="10"
              label="Address"
              required
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="PhoneNumber"
              :counter="10"
              label="PhoneNumber"
              required
            />
          </v-col>
          <v-col cols="100" md="6">
            <v-container fluid>
              <h4>1.ความสอาดของร้านค้า</h4>
              <v-radio-group v-model="radios1" :mandatory="false" row>
                <v-radio label="5.มากที่สุด" value="5"></v-radio>
                <v-radio label="4.มาก" value="4"></v-radio>
                <v-radio label="3.ปานกลาง" value="3"></v-radio>
                <v-radio label="2.นอย" value="2"></v-radio>
                <v-radio label="1.น้อยที่สุด" value="1"></v-radio>
              </v-radio-group>
            </v-container>
          </v-col>
          <v-col cols="12" md="6">
            <v-container fluid>
              <h4>2.การให้บริการอของพนักงาน</h4>
              <v-radio-group v-model="radios2" :mandatory="false" row>
                <v-radio label="5.มากที่สุด" value="5"></v-radio>
                <v-radio label="4.มาก" value="4"></v-radio>
                <v-radio label="3.ปานกลาง" value="3"></v-radio>
                <v-radio label="2.นอย" value="2"></v-radio>
                <v-radio label="1.น้อยที่สุด" value="1"></v-radio>
              </v-radio-group>
            </v-container>
          </v-col>
          <v-col cols="12" md="6">
            <v-container fluid>
              <h4>3.สิ่งอำนวยความสะดวก</h4>
              <v-radio-group v-model="radios3" :mandatory="false" row>
                <v-radio label="5.มากที่สุด" value="5"></v-radio>
                <v-radio label="4.มาก" value="4"></v-radio>
                <v-radio label="3.ปานกลาง" value="3"></v-radio>
                <v-radio label="2.นอย" value="2"></v-radio>
                <v-radio label="1.น้อยที่สุด" value="1"></v-radio>
              </v-radio-group>
            </v-container>
          </v-col>
          <v-col cols="12" md="6">
            <v-container fluid>
              <h4>4.วิธีการชำระเงิน</h4>
              <v-radio-group v-model="radios4" :mandatory="false" row>
                <v-radio label="5.มากที่สุด" value="5"></v-radio>
                <v-radio label="4.มาก" value="4"></v-radio>
                <v-radio label="3.ปานกลาง" value="3"></v-radio>
                <v-radio label="2.นอย" value="2"></v-radio>
                <v-radio label="1.น้อยที่สุด" value="1"></v-radio>
              </v-radio-group>
            </v-container>
          </v-col>
          <v-col cols="12" md="6">
            <v-container fluid>
              <h4>5.ความพึงพอใจเมื่อได้รับสินค้า</h4>
              <v-radio-group v-model="radios5" :mandatory="false" row>
                <v-radio label="5.มากที่สุด" value="5"></v-radio>
                <v-radio label="4.มาก" value="4"></v-radio>
                <v-radio label="3.ปานกลาง" value="3"></v-radio>
                <v-radio label="2.นอย" value="2"></v-radio>
                <v-radio label="1.น้อยที่สุด" value="1"></v-radio>
              </v-radio-group>
            </v-container>
          </v-col>
        </v-row>
      </v-container>

      <div class="text-center">
        <v-btn color="green" x-large dark @click="addData"> submit </v-btn>
      </div>
    </v-form>
  </v-app>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      valid: false,
      name: '',
      Lastname: '',
      Age: '',
      Email: '',
      Address: '',
      PhoneNumber: '',
      radios1: '',
      radios2: '',
      radios3: '',
      radios4: '',
      radios5: '',
    }
  },
  methods: {
    addData() {
      const data = {
        name: this.name,
        Lastname: this.Lastname,
        Age: this.Age,
        Email: this.Email,
        Address: this.Address,
        PhoneNumber: this.PhoneNumber,
        radios1: this.radios1,
        radios2: this.radios2,
        radios3: this.radios3,
        radios4: this.radios4,
        radios5: this.radios5,
      }
      db.collection('payment')
        .doc()
        .set(data)
        .then(function () {
          console.log('Document successfully written! -> MyForm')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>
<style scoped>
#oo {
  background-image: url('https://cdn.wallpapersafari.com/20/19/HGF3XI.jpg');
  background-size: cover;
}
#h1 {
  color: 'error';
}
</style>
