const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("myWallet.pug", { title: "MikMik", bank: "Unionbank" });
});
router.post("/fifty", (req, res) => {
  let nem = require("nem-sdk").default;
  let endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

  //mik mik password ni driver and private key ni driver  
  let common = nem.model.objects.create("common")("mikmik", "dc1a5373e75038334fcd7dddd3ce8a4d77b4b271566ca9882ff67692115f7864");

  let transferTransaction = nem.model.objects.create("transferTransaction")("TBB6A7R3YQEX6ULY3DYC7H26CDYQQVUUKNWSVS6B", 0, "Mosaic Transfer Success");

  var mosaicDefinitions = nem.model.objects.get("mosaicDefinitionMetaDataPair");

  // ubcl = name space , tomen mosaic name , 
  var mosaicAttachment = nem.model.objects.create("mosaicAttachment")("ubcl", "token", 50000);

  transferTransaction.mosaics.push(mosaicAttachment);

  nem.com.requests.namespace.mosaicDefinitions(endpoint, mosaicAttachment.mosaicId.namespaceId).then(function (res) {
    var definition = nem.utils.helpers.searchMosaicDefinitionArray(res.data, ["token"]);
    var fullName = nem.utils.format.mosaicIdToName(mosaicAttachment.mosaicId);

    mosaicDefinitions[fullName] = {};
    mosaicDefinitions[fullName].mosaicDefinition = definition[fullName];

    let preparedTransaction = nem.model.transactions.prepare("mosaicTransferTransaction")(common, transferTransaction, mosaicDefinitions, nem.model.network.data.testnet.id);
    preparedTransaction.fee = 1000000;


    nem.model.transactions.send(common, preparedTransaction, endpoint).then(function (res) {
      console.log(res);
    }, function (err) {
      console.log(err);
    });

  }, function (err) {
    console.log(err);
  });
});

router.post("/ten", (req, res) => {
  let nem = require("nem-sdk").default;
  let endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

  //mik mik password ni driver and private key ni driver  
  let common = nem.model.objects.create("common")("mikmik", "dc1a5373e75038334fcd7dddd3ce8a4d77b4b271566ca9882ff67692115f7864");

  let transferTransaction = nem.model.objects.create("transferTransaction")("TBB6A7R3YQEX6ULY3DYC7H26CDYQQVUUKNWSVS6B", 0, "Mosaic Transfer Success");

  var mosaicDefinitions = nem.model.objects.get("mosaicDefinitionMetaDataPair");

  // ubcl = name space , tomen mosaic name , 
  var mosaicAttachment = nem.model.objects.create("mosaicAttachment")("ubcl", "token", 10000);

  transferTransaction.mosaics.push(mosaicAttachment);

  nem.com.requests.namespace.mosaicDefinitions(endpoint, mosaicAttachment.mosaicId.namespaceId).then(function (res) {
    var definition = nem.utils.helpers.searchMosaicDefinitionArray(res.data, ["token"]);
    var fullName = nem.utils.format.mosaicIdToName(mosaicAttachment.mosaicId);

    mosaicDefinitions[fullName] = {};
    mosaicDefinitions[fullName].mosaicDefinition = definition[fullName];

    let preparedTransaction = nem.model.transactions.prepare("mosaicTransferTransaction")(common, transferTransaction, mosaicDefinitions, nem.model.network.data.testnet.id);
    preparedTransaction.fee = 1000000;


    nem.model.transactions.send(common, preparedTransaction, endpoint).then(function (res) {
      console.log(res);
    }, function (err) {
      console.log(err);
    });

  }, function (err) {
    console.log(err);
  });
});
router.post("/hundred", (req, res) => {
  let nem = require("nem-sdk").default;
  let endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

  //mik mik password ni driver and private key ni driver  
  let common = nem.model.objects.create("common")("mikmik", "dc1a5373e75038334fcd7dddd3ce8a4d77b4b271566ca9882ff67692115f7864");

  let transferTransaction = nem.model.objects.create("transferTransaction")("TBB6A7R3YQEX6ULY3DYC7H26CDYQQVUUKNWSVS6B", 0, "Mosaic Transfer Success");

  var mosaicDefinitions = nem.model.objects.get("mosaicDefinitionMetaDataPair");

  // ubcl = name space , tomen mosaic name , 
  var mosaicAttachment = nem.model.objects.create("mosaicAttachment")("ubcl", "token", 10000);

  transferTransaction.mosaics.push(mosaicAttachment);

  nem.com.requests.namespace.mosaicDefinitions(endpoint, mosaicAttachment.mosaicId.namespaceId).then(function (res) {
    var definition = nem.utils.helpers.searchMosaicDefinitionArray(res.data, ["token"]);
    var fullName = nem.utils.format.mosaicIdToName(mosaicAttachment.mosaicId);

    mosaicDefinitions[fullName] = {};
    mosaicDefinitions[fullName].mosaicDefinition = definition[fullName];

    let preparedTransaction = nem.model.transactions.prepare("mosaicTransferTransaction")(common, transferTransaction, mosaicDefinitions, nem.model.network.data.testnet.id);
    preparedTransaction.fee = 1000000;


    nem.model.transactions.send(common, preparedTransaction, endpoint).then(function (res) {
      console.log(res);
    }, function (err) {
      console.log(err);
    });

  }, function (err) {
    console.log(err);
  });
});
module.exports = router;