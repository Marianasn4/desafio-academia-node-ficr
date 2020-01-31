const ServiceFacebook = require('../service/facebook')

    class CurriculoController {
        async get(req, res, next) {
        try {
            const ApiFace = await ServiceFacebook.get(`me?fields=id%2Cname%2Clast_name%2Caddress%2Clocation%2Cgender%2Cbirthday%2Cemail&access_token=${process.env.FACE_TOKEN}`)

            const { name, birthday, location, email, gender } = ApiFace.data;
       
            const profile = {
                facebook: {
                    nome: name,
                    data_nascimento: birthday,
                    endereço: location.name,
                    genero: gender === "female" ? "masculino" : "feminino",
                    email: email,
                }
            }
            return res.json(profile)
        }catch(error){
            console.error('Error na aplicação!')
        }
    }
}
