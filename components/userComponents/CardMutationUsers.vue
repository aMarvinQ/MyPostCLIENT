<template>
    <div class="collapse" id="collapseExample">
        <div class="card card-body">
            <!-- formulario para crear un nuevo usuario -->
            <form @click="createUser">
                <div class="mb-3">
                    <label class="form-label">Username</label>
                    <input v-model="userName" type="text" class="form-control">
                </div>

                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input v-model="email" type="email" class="form-control">
                </div>

                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input v-model="password" type="password" class="form-control">
                </div>

                <div class="mb-3">
                    <label class="form-label">Birthdate</label>
                    <input type="date" class="form-control">
                </div>

                <div class="mb-3">
                    <label class="form-label">Status</label>
                    <select class="form-select">
                        <option selected>Select state</option>
                        <option value="1">Activo</option>
                        <option value="2">Inactivo</option>
                    </select>
                </div>
                <button type="submit">Create User</button>
            </form>
        </div>
    </div>
</template>

<script>
import createUser from "../graphql/userMutations.gql"

export default {
    name: 'CardMutationUsers',
    data() {
        return {
            userName: this.userName,
            email: this.email,
            password: this.password,
            birthdate: "2025-02-28T18:04:03-06:00",
            statusId: 1
        };
    },
    methods: {
        // función para crear usuario, recibiendo las variables de data
        createUser() {
            this.$apollo.mutate({
                mutation: createUser,
                variables: {
                    userName: this.userName,
                    email: this.email,
                    password: this.password,
                    birthdate: this.birthdate,
                    statusId: this.statusId,
                }
            })
            .then((res) => console.log(res))
            .catch((e) => console.log(e))
        }
    }
}
</script>