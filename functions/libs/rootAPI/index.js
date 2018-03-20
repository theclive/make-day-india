var fetch = require('node-fetch');


function searchModel(model) {
    console.log(model);
    return fetch("https://sandbox.root.co.za/v1/insurance/modules/root_gadgets/models", {
        headers: {
          Authorization: "Basic c2FuZGJveF9NalJsT0dZek5XWXRNV013T1MwME9ESmpMV0V3TldVdE9HWTVZalUwWWpBMU5EVXdMa2g0YzJWa1dWRmZZek55TlRCaGFXczNSRXBsYjBOMU0zaDJNMjVsYlZOajo=",
          "Cache-Control": "no-cache"
        }
      }).then(res => res.json())
      .then(json => console.log(json));
}

module.exports = { searchModel }