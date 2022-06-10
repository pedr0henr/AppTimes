<script>
import { v4 as uuidv4 } from "uuid";
  export default {
    data() {
      return {
        times:[
          {id:"f81d5b9c-a9de-4e5e-abc4-e6da10f84351", nome: 'Time 1'},
          {id:"710e40e8-2acd-40c9-9b79-29946782c5fa", nome: 'Time 2'},
          {id:"433b1360-c738-4fc4-a7e8-7a301035808d", nome: 'Time 3'},
        ],
        novo_time:"",
      };
    },
    methods:{
      salvar() {
        const novo_id = uuidv4();
        this.times.push( {
          id: novo_id,
          nome:this.novo_time,
        });
      },
    },
  };
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de times</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="novo_time" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-times">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in times" :key="time.id">
          <td>{{time.id}}</td>
          <td>{{time.nome}}</td>
          <td>???</td>
          
          
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
.title {
  text-align: center;
  margin: 2rem 0;
}

.form-input {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.form-input input {
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.form-input button {
  padding: 0.5rem;
  width: 15%;
  border: 1px solid rgb(20, 113, 20);
  border-radius: 10px;
  background-color: rgb(20, 113, 20);
  color: white;
  font-weight: bold;
  margin-left: 1%;
}

.list-times {
  display: flex;
  justify-content: center;
}

table {
  width: 50%;
  border-collapse: collapse;
  margin: 0 auto;
  border: 1px solid black;
  font-size: 1.1rem;
  text-align: center;
}

table thead {
  background-color: rgb(42, 24, 98);
  color: white;
}

table thead th {
  font-weight: bolder;
}

table tbody tr:nth-child(odd) {
  background-color: rgb(189, 182, 182);
}
</style>
