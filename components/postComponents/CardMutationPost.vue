<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">New Post: {{ titleCard }}</h5>
        <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        ></button>
      </div>
      <!-- formulario para recibir los parametros desde la interfaz -->
        <div class="modal-body">
          <input
            v-model="title"
            type="text"
            class="form-control mt-2"
            id="recipient-name"
            placeholder="Title Post"
          />
          <textarea
            v-model="description"
            class="form-control mt-2"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write a description"
          ></textarea>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <!-- botón para ejecutar la función createPost pasando los parametros recibidos en los formularios -->
          <button 
            @click="createPost"  
            type="button" 
            class="btn btn-primary"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// mutación graphql
import createPost from "../graphql/postMutations.gql";

export default {
  name: 'CardMutationPost',
  // variables que reciben los datos ingresados en el formulario
  data() {
    return {
      title: this.title,
      description: this.description,
      userId: 2, //por no haber lógica del login se define por defecto un id del usuario
      statusId: 1, //activo por defecto
    };
  },
  // función para crear el post usando .mutate de apollo, recibiendo las variables de data
  methods: {
    createPost() {
      this.$apollo
        .mutate({
          mutation: createPost,
          variables: {
            title: this.title,
            description: this.description,
            userId: this.userId,
            statusId: this.statusId,
          },
        })
        // obtenemos la respuesta de la promesa
        .then((res) => console.log(res))
        // manejor de errores
        .catch((e) => console.log(e));
    },
  },
  props: {
    titleCard: String
  }
};
</script>
