<template>
  <div>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="textList"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      textList: [],
      search: '',
      headers: [
        { text: 'Name', align: 'start', sortable: 'false', value: 'name' },
        { text: 'Lastname', value: 'Lastname' },
        { text: 'Age', value: 'Age' },
        { text: 'Email', value: 'Email' },
        { text: 'Address', value: 'Address' },
        { text: 'PhoneNumber', value: 'PhoneNumber' },
        { text: '1.ความสอาดของร้านค้า', value: 'radios1' },
        { text: '2.การให้บริการอของพนักงาน', value: 'radios2' },
        { text: '3.สิ่งอำนวยความสะดวก', value: 'radios3' },
        { text: '4.วิธีการชำระเงิน', value: 'radios4' },
        { text: '5.ความพึงพอใจเมื่อได้รับสินค้า', value: 'radios5' },
      ],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      db.collection('payment')
        .orderBy('name')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.textList = data
        })
    },
  },
}
</script>
