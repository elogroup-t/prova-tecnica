(function () {
  'use strict';
  const express = require('express');
  const srv = express();
  const bodyParser = require('body-parser');

  srv.use(express.json());
  srv.use(bodyParser.urlencoded({ extended: true }));

  srv.post('/', function (req, res) {
     res.send(setJson(req));
  });

  function setJson(req) {
    console.log(req.body);
    const name = req.body.nome;
    const tel = req.body.telefone;
    const select = req.body.sel;
    let possuiRede = req.body.possuiRedeSocial;
    let arr = []
    if (req.body.facebook) arr.push(req.body.facebook);
    if (req.body.instagram) arr.push(req.body.instagram);
    if (req.body.linkedin) arr.push(req.body.linkedin);
    if (arr.length == 0) {
      arr = ["Não possui nenhuma das redes sociais das opções"];
    }
    let json;
    if (possuiRede=='sim') {
      json = {
        "nome": name,
        "telefone": tel,
        "comoNosConheceu": select,
        "possuiRedeSocial": possuiRede,
        "quaisRedes": arr
      }
    } else {
      json = {
        "nome": name,
        "telefone": tel,
        "comoNosConheceu": select,
        "possuiRedeSocial": possuiRede
      }
    }
    return json
  }

  srv.listen(8080);
})();